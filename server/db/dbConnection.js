import mongoose from "mongoose";

export const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI,{
            dbName: "portfolio",
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(error);
    }
}