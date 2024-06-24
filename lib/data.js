'use server'
import db from "./db";
// import connectDB from "@/lib/db"
import Contact from "@/models/Contact";

export const getContacts = async() => {
    try {
        db.connect()
        // connectDB()
        const contacts = await Contact.find({})
        return contacts
    } catch (error) {
        throw new Error ("Failed To Get Contacts " + error)
    }
}


export const getContact = async (id) => {
    try {
        // db.connect()
        connectDB()
        const contact = await Contact.findById(id)
        return contact
    } catch (error) {
        throw new Error ("Failed To Get Contact " + error)
    }
}