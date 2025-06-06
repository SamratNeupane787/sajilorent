import mongoose from "mongoose";

export const connectMongodb = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongodb")
  } catch (error) {
    console.log("Error connecting to database", error)
  }
}

