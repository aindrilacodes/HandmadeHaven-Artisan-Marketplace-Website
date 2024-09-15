require('dotenv').config();
const serverport=process.env.SERVER_PORT || 8002;
const mongodburl=process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/HandmadeHaven';

module.exports={serverport,mongodburl}