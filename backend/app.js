import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app=express();

// configure cors now
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))
// handeling data coming from json 
app.use(express.json({
    limit:"20kb"
}))

app.use(cookieParser())
// handeling data coming from url
app.use(express.urlencoded({
    extended:true,
    limit:"20kb"}))
    

import customerRoutes from "./routes/customerRoutes.js"

app.use("/api/v1/customers",customerRoutes)
export {app}