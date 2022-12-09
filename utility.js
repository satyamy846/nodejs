const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(express.json());

var database;

app.get('/users',function(req,res){
    //kya chahiye aapko browser pe vo likho naa
    //mujhe database ka collection chahiye
    database.collection("luxurycars").find({}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

app.listen(3000,function(){
    console.log("Server is running at 3000 port");
    //connect to mongodb
    MongoClient.connect("mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000",(err,res)=>{
        if(err) throw err;
        database = res.db("CarDB");
        console.log("Connected to the database");
    });
});