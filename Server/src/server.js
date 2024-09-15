const app=require('./app');
const colors = require('colors');
const {serverport}=require('./envstore');



app.listen(serverport,async()=>{console.log(`Server Started at http://localhost:${serverport}`.bgCyan.black)});