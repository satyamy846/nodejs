const express = require('express');

const app = express();
app.use(express.json());
const  connection = require('./mongodb');

app.get('/',function(req,res){
    res.send(connection);
});

app.listen(3000,function(err,result){
    if(err) throw err;
    console.log(("Server is running at port no 3000"));

});