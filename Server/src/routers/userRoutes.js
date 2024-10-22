const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getLoggedInUser,
  getUsers,
} = require("../controllers/userController");
//router.post("/", getUsers);
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getLoggedInUser);

module.exports = router;