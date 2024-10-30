const user = require("../models/userModel");
const AsyncHandler = require("express-async-handler");
const ApiError = require("../helpers/apiError.js");
const { ApiResponse } = require("../helpers/ApiResponse.js");
const { hashPassword, compare } = require("../helpers/authhelper");

const tenDaysFromNow = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
const options = {
  httpOnly: true,
  secure: true,
  expires: tenDaysFromNow,
};
const generateAccessTokenandRefreshTokens = async (userId) => {
  try {
    const finduser = await user.findById(userId);
    //console.log(finduser);

    const accessToken = finduser.generateAccessToken();

    const refreshToken = finduser.generateRefreshToken();
    //console.log(accessToken);

    finduser.refreshToken = refreshToken;
    await finduser.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error generating tokens:", error);
    throw new ApiError(500, "Internal server error while generating tokens");
  }
};

const registerController = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields Required");
  }
  //   existing user
  const existingUser = await user.findOne({ email });
  if (existingUser) throw new ApiError(400, "User already exists! Login");

  const hashedpassword = await hashPassword(password);
  const createdUser = await user.create({
    name: name?.toLowerCase(),
    email,
    password: hashedpassword,
  });

  if (!createdUser) {
    throw new ApiError(500, "Internal Server Error while registering the user");
  }
  console.log(createdUser._id);

  const { accessToken, refreshToken } =
    await generateAccessTokenandRefreshTokens(createdUser?._id);
 // console.log(accessToken);

  const responseUser = {
    id: createdUser._id,
    firstname: createdUser.name,
    email: createdUser.email,
  };
  return res
    .status(201)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(new ApiResponse(responseUser, "User registered successfully"));
});
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
