import mongoose from "mongoose";
import colors from "colors";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MongoDB Database: ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in MongoDB connection: ${error.message}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
