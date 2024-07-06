import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URL;
        if (!uri) {
            throw new Error('MONGO_URL is not defined in environment variables.');
        }

        const conn = await mongoose.connect(uri);

        console.log(`Connected to the MongoDB Database: ${conn.connection.host}`.bgGreen.white);
    } catch (error) {
        console.error(`Error in MongoDB: ${error.message}`.bgRed.white);
    }
};

export default connectDB;
