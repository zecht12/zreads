import mongoose from "mongoose"

let isConnected = false;
export const connectionToDB =async () => {
    mongoose.set('strictQuery', true);
    if (!process.env.MONGODB_URL) {
        console.log("MONGODB_URL")
    }
}