
import express from"express"
const userRoutes=express.Router();
userRoutes.post("/register",(req,res)=>{
    const{name}=req.body;
    res.status(200).json({data:`welcome ${name}`})
})
export default userRoutes