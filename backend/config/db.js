import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected :${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default connectdb;
