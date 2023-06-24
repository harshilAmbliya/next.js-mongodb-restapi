import mongoose from "mongoose";


const connectdb = async () => {
    // const mongouri =process.env.MONGODB_URI;
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect sucessfully..")
    } catch (error) {
        console.log(error.message)
    }
}

export default connectdb;

