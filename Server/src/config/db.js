const mongoose=require('mongoose')
const {mongodburl}=require('./envstore')
const colors=require('colors')


async function connectDb(){
    try{
        if(mongoose.connection.readyState!=1){
            if (!mongodburl) {
                throw new Error("MONGO_URI is not defined in the environment variables");
            }
            await mongoose.connect(mongodburl);
            console.log(("Database connected").bgRed.white);
            console.log((mongoose.connection.host).bgYellow.black);    
            
        }
        else{
            console.log("Database already connected");
            
        }
    }
    catch(error){
        console.error(error);
        
    }
}
module.exports={connectDb};