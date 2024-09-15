const app=require('./app');
const colors = require('colors');
const {serverport}=require('./config/envstore');
const {connectDb}=require('./config/db')



app.listen(serverport,async()=>{console.log(`Server Started at http://localhost:${serverport}`.bgCyan.black);
await connectDb()});