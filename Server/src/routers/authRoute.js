const express=require('express');
const router=express.Router()
const {registerController}=require('../controllers/authController')


router.post('/register', registerController);

//router.post('/login', loginController);

module.exports=router