'use server'
import News from "@/models/News"
import connectDB from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

src/app/api/auth/[kindeAuth]/route.js



function isInvalidText(text) {
    return !text || text.trim() === '';
}

export const addNews = async(prevState, FormData) => {
    const {headline, creator, description, email, createdAt} = Object.fromEntries(FormData)
    try {
        connectDB()
        const newNews = new News({
           headline, creator, description, email, createdAt
        })

        if (
            isInvalidText(newNews.headline) || 
            isInvalidText(newNews.creator) || 
            isInvalidText(newNews.description) || 
            isInvalidText(newNews.email) || 
            !newNews.email.includes('@')
        ) {
            return {
                message: 'Invalid Input Entered.'
            };
        } 

        newNews.createdAt = new Date().toISOString();

        await newNews.save()
    } catch (error) {
       throw new Error ("Failed to Post News")
    }

    revalidatePath("/")
    redirect("/")
}
 
export const updateNews = async (FormData) => {
    const { id, headline, creator, description, email, createdAt } = Object.fromEntries(FormData)
    try {
        connectDB();
        const updateFields = { headline, creator, description, email, createdAt }
        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" 
            || undefined) && delete updateFields[key]
        )
        await News.findByIdAndUpdate(id, updateFields)
    } catch (error) {
        throw new Error("Failed To Update News")
    }
    revalidatePath("/")
    redirect("/")
}

export const deleteNews = async (FormData) => {
    const {id} = Object.fromEntries(FormData)
    try {
        connectDB();
        await News.findByIdAndDelete(id)
    } catch (error) {
        throw new Error("Failed To Delete News")
        
    }
    revalidatePath("/")
    redirect("/")
}

