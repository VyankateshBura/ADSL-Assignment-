var express = require('express');
let connection;
var oracledb = require('oracledb');
const task = require('./Routes/route')
var app = express();
let port = 5000;

app.use(express.json());
// app.use(cors());
const start = async()=>{
    try{
        app.listen(port,()=>{
            console.log(`The app is listening on the port ${port}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start();



app.use("/api/v1/",task);

