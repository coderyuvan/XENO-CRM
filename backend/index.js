import { app } from "./app.js";
import connectDB from "./dbconfig/db.js"
import  dotenv from "dotenv";


dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||4000,()=>{
        console.log(`App is listening on port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Error connecting to database",err)
 })