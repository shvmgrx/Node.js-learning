var http = require('http');
var dt = require('./myfirstmodule');
var fs= require('fs');
var uc = require('upper-case');





























//Email trial
/*
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shivam.goraksha.s@gmail.com',
    pass: 't211shivamtab3'
  }
});

var mailOptions = {
  from: 'goraksha@gmail.com',
  to: 'gorakshaseema@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was really easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
*/




































/*
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a screfam!');
}

//Assign the eventhandler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');



*/


















//File read test
/*http.createServer(function(req,res){
fs.readFile('filer.html',function(err,data){
	res.writeHead(200,{'Content-type':'text.html'});
	res.write(data);
	res.end();
});
}).listen(8005);*/


//Own module testing
/*
http.createServer(function (req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.write("The date and time rn is: "+dt.myDateTime());
	res.write(uc("The date and time rn is: "));
	res.write(req.url);
	res.end();
}).listen(8005);
*/