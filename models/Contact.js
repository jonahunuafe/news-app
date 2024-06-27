import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // date: {
    //     type: Date,
    //     required: true
    // }
    // imageUrl: {
    //     type: String,
    //     required: true
    // }
}, 
{timestamps: true}
)

export default mongoose?.models?.Crud || mongoose.model("Crud", ContactSchema)