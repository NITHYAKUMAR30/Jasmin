
import express from"express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import connectDB from "./database/connectDB.js";
import userRoutes from"./routes/userRoutes.js";
const app=express();
app.use(express.json());
app.use(cors());
app.use("/api/user",userRoutes)
app.get("/",(req,res)=>{
    res.status(200).json({Message:"Api change sucess"});

});
app.get("/api/heart-beat",(req,res)=>{
    res.status(200).json({data : "Heart beat was sucessfully"});
    console.log("Heart beat was sucessful")
});
console.log(process.env.PORT)
app.listen(process.env.PORT,()=>{
    console.log(`Server runnig sucessfully at port ${process.env.PORT}`);
});
connectDB()