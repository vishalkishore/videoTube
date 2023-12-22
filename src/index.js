import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path:"./.env"
});

connectDB()
.then( () => {
    app.on("error", (error)=>{
        console.error(`ERROR EXPRESS LOADING : ${error}`);
        throw error;
    });
    const servingPORT =process.env.PORT || 8000;
    app.listen( servingPORT, ()=>{
        console.log(`Listening on PORT ${servingPORT}`);
    })
})
.catch((error)=>{
    console.error(`ERROR  INITALISATION: ${error}`);
    throw error;
});