const mongoose=require('mongoose')
const {defaultimagepath}=require('../config/envstore')
const bcrypt=require('bcrypt')

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'User name is required'],
        trim:true,
        maxlength:[31,'User name exceeded(max-31)']
    },
    email:{
        type:String,
        unique:true,
        required:[true,'User email is required'],
        trim:true,
        lowercase:true,
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
        minlength:[3,'length of username too short'],
        maxlength:[31,'User email exceeded(max-31)']
    },
    password:{
        type:String,
        required:[true,'User password is required'],
        minlength:[8,'minimum size of 8 is required'],
        maxlength:[12,'User name exceeded(max-12)'] 
    },
    image:{
        type:String,
        default:defaultimagepath , 
    },
    Phone:{
        type:String,
        required:[true,'User phone is required'], 
    },
},{timestamps:true});


const user=mongoose.model('users',userSchema)
module.exports=user


