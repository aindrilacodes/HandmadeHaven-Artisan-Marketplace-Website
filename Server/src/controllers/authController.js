const userModel=require('../models/userModel')
const hashpassword=require('../helpers/authhelper')
const registerController=async(req,res)=>{
    try{
const {name,email,password,phone,image}=req.body
//existing user
const existing_user=await userModel.findOne({email})
if(existing_user)
{
    return res.status(200).send({success:true,
        message:"Already Registered please login"}
    )
}
//register user
const hashed=await hashpassword(password)
   //save
   const user=new userModel
}   
    
    catch(error)
    {
        console.log(error);
        res.status(500).send({success:false,
           message:"Error in registration" ,
           error
        })
        
    }
}


module.exports=registerController
