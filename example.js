var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) //if we do extended :true then we can use any type of data  
app.use(express.static('public')); //here public is the folder in which we are sending our html file(index.html) to the server using middleware


app.get('/index.html', function (req, res) {  // sending the reponse
   res.sendFile( __dirname + "/" + "index.html" );  
})
//app.point('end point',callback function);  
app.post('/process_post', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format
   //response is getting from the html
response = {  
       first_name:req.body.first_name,  //saving the response
       last_name:req.body.last_name  
   };  
   console.log(response);
   // changing the response in the string  
   res.send(JSON.stringify(response));  
}); 
//creating a server 
// app.listen(port number,callback function) 
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})