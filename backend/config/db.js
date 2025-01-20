import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log(`ERROR : ${err.message}`);
    process.exit(1); //Process code 1 means exit with failure, 0 means success
  }
};
