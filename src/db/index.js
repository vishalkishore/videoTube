import mongoose from 'mongoose';


// const connectDB = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
//         // console.log(connectionInstance);
//         console.log(`Connected to Mongodb successfully !!!\nHOST : ${connectionInstance.connection.host} \nPORT : ${connectionInstance.connection.port}`);
//     }
//     catch (error) {
//         console.log(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
//         console.error(`ERROR DB CONNECTION: ${error}`);
//         process.exit(1);
//     }
// }

const connectDB =  () =>{
    return  Promise.resolve().then(async ()=>{
        const instance= await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
        console.log(instance.connection)
    }).catch((error)=>{
        console.log("Something went wrong")
        console.log(error)
    })
};

// const connectDB = () => {
//     return mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
//         .then((connectionInstance) => {
//             console.log(`Connected to Mongodb successfully !!!\nHOST : ${connectionInstance.connection.host} \nPORT : ${connectionInstance.connection.port}`);
//         })
//         .catch((error) => {
//             console.log(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
//             console.error(`ERROR DB CONNECTION: ${error}`);
//             process.exit(1);
//         });
// };

// const connectDB = () => {
//     return new Promise((resolve, reject) => {
//         mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
//             .then((instance) => {
//                 console.log(instance.connection.host);
//                 resolve(instance);
//             })
//             .catch((error) => {
//                 console.log("Something went wrong");
//                 console.log(error);
//                 reject(error);
//             });
//     });
// };

export default connectDB;