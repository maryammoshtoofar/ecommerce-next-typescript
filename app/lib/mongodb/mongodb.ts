import mongoose from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
