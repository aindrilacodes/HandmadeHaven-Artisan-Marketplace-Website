const express=require('express');
const router=express.Router()
const registerController=require('../controllers/authController')

//routing
//register // method post
router.post('/register',registerController)

module.exports=router