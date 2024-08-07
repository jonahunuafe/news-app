import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: Date.now()
    }
}, 
{timestamps: true}
)

export default mongoose?.models?.Crud || mongoose.model("Crud", NewsSchema)