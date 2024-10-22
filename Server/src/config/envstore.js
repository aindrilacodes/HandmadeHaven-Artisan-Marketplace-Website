const dotenv=require('dotenv')
dotenv.config()
const serverport=process.env.SERVER_PORT || 8002;
const mongodburl=process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/HandmadeHaven';
const defaultimagepath= process.env.DEFAULT_USER_IMAGE_PATH || 'Public/images/users/default.jpg';
module.exports={serverport,mongodburl,defaultimagepath}