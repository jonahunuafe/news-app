import mongoose, { Schema } from "mongoose";


const meetupSchema = new Schema(
    {
        title: String,
        image: String,
        address: String, 
        description: String
    },
    {
        timestamps: true,
    }
)

const Meetup = mongoose.models.Meetup || mongoose.model('Meetup', meetupSchema)

export default Meetup;

