var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send("Welcome to my express module");
})

var server = app.listen(3000,function(){
    var host = server.address().address;
    console.log(host);

    var port = server.address();
    console.log(port);
    console.log("my server is running at 3000 port");
})
