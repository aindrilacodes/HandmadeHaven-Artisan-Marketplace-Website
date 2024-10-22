const express=require('express');
const morgan=require('morgan');
const app=express();
const cors = require('cors');
const authrouter=require('./routers/authRoute')


//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())



//routes
app.use('/api/auth',authrouter);

app.get("/test",(req,res)=>{
    res.status(200).send({message:"API is working just Fine"})
})


module.exports=app;