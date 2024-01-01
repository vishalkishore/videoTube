import mongoose from "mongoose";

const connectDB =  () =>{
    Promise.resolve(async ()=>{
        const instance= await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`)
        console.log(instance.connection)
    }).catch((error)=>{
        console.log(error)
    })
};


export {connectDB};