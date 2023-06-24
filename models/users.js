import mongoose, { Schema } from "mongoose";

const Userschema = new Schema({
    name: String,
    email: String,
    password: String
}, {
    timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', Userschema)

export default User;