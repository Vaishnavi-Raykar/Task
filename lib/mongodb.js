import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Task');
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }  
};

export default connectMongoDB;
