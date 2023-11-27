import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected to MongoDB. ");
  } catch (error) {
    console.log(error);
  }
};
export default connectMongoDB;
