const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/directConnection=true&serverSelectionTimeoutMS=2000";

MongoClient.connect(url,function(err,db){

    if(err) throw err;
    console.log("database connected successfully");
    const database = db.db('CarDB');
    database.collection('luxurycars').find({}).toArray(function(err,result){
        if(err) throw err;
        module.exports.res = result;
        db.close();
    })
})