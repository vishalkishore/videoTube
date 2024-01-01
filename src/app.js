import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN 
}));
express.u
app.use(express.json({limit: "7kb"}));
app.use(express.urlencoded({extended : true , limit: "7kb"}));
app.use(express.static("public"));

app.use(cookieParser());

export default app;