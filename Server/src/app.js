const express=require('express');
const morgan=require('morgan');
const app=express();
const router=require('./routers/authRoute')


//middlewares
app.use(morgan('dev'));
app.use(express.json())


//routes
app.use("/api/v1/auth",router)

app.get("/test",(req,res)=>{
    res.status(200).send({message:"API is working just Fine"})
})


module.exports=app;