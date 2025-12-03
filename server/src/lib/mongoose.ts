import mongoose from "mongoose";
import "dotenv";

export async function connectDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/gradeflow');
    console.log("MongoDB connected successfully")
  }
  catch(err: any) {
    throw new Error(err.message, err.status)
  }
}
