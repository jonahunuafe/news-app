'use server'
import connectDB from "@/lib/db"
import News from "@/models/News";

export const getAllNews = async() => {
    try {
        connectDB()
        const news = await News.find({})
        return news
    } catch (error) {
        throw new Error ("Failed To Get News")
    }
}


export const getSpecificNews = async (id) => {
    try {
        connectDB()
        const news = await News.findById(id)
        return news
    } catch (error) {
        throw new Error ("Failed To Get Specific News")
    }
}