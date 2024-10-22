const userModel = require("../models/userModel");
const { hashPassword, compare } = require("../helpers/authhelper");
const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    } else {
      //checking existing user
      const existing_user = await userModel.findOne({ email });
      if (existing_user) {
        return res
          .status(200)
          .send({ success: true, message: "Already Registered please login" });
      }

      const hashed = await hashPassword(password);
      const user = new userModel({ name, email, password: hashed });
       await user.save(); 
        res.status(201).send({ success: true, message:"Registration successful"});
      
    }
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ success: false, message: errors });
    }

    console.log(error);
    res.status(500).send({ success: false, message: "Error in registration", error });
  }
};
const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    } else {
      //existing user
      const existing_user = await userModel.findOne({ email });
      if (!existing_user) {
        return res
          .status(404)
          .send({ success: false, message: "User not found" });
      }

      const isMatch = await compare(password, existing_user.password);
      if (!isMatch) {
        return res
          .status(401)
          .send({ success: false, message: "Invalid credentials" });
      }

      res.status(200).send({ success: true, message: "Login Successful" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).send({ success: false, message: "Invalid Credentials" });
  }
};
module.exports = { registerController, loginController };
