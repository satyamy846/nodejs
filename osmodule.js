const os = require('os');//it is a constant(preferable for os module)
var os1=require('os');//value is changeable
console.log(os.networkInterfaces());
console.log(os.arch());//gives you the os config type whether x64 or not?