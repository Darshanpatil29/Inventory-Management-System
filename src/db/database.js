import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB = () => {
    const dbURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
    return mongoose.connect(dbURI)
    .then((connectionInstance) => {
        console.log("MongoDB "+ DB_NAME +" connected successfully");
        console.log("Host: " + connectionInstance.connection.host);
        return connectionInstance;
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });
}

export default connectDB;