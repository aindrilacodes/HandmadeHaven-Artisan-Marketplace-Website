const mongoose=require('mongoose')
const {mongodburl}=require('./envstore')
const colors=require('colors')

const connectDb=async()=>{
    try{
const conn=await mongoose.connect(mongodburl)
console.log(`Database Connected ${conn.connection.host}`.bgGreen.white)
    }
    catch(error)
    {
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}

module.exports={connectDb};