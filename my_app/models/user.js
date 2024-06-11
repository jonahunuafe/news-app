import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: "String",
        required: [true, "Email is required"]
    },
    username: {
        type: "String",
        required: [true, "Username is required"]
    },
    description: {
        type: "String",
    },
    image: {
        type: "String",
    },
});

const User = models.User || model("User", UserSchema);

export default User;



// import mongoose from "mongoose";

// const ContactSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     phone: {
//         type: Number,
//         required: true
//     },
// }, {timestamps: true})

// export default mongoose?.models?.Contact || mongoose.model("Contact", ContactSchema)