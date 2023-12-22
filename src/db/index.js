import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
        // console.log(connectionInstance);
        console.log(`Connected to Mongodb successfully !!!\nHOST : ${connectionInstance.connection.host} \nPORT : ${connectionInstance.connection.port}`);
    }
    catch (error) {
        console.log(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
        console.error(`ERROR DB CONNECTION: ${error}`);
        process.exit(1);
    }
}

export default connectDB;