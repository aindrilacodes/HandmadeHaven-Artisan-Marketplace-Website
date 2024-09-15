const express=require('express');
const morgan=require('morgan');
const app=express();

app.use(morgan('dev'));
app.use(express.json())
app.get("/test",(req,res)=>{
    res.status(200).send({message:"API is working just Fine"})
})


module.exports=app;