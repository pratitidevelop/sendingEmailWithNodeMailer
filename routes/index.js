var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();


	
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Enter the hello text' });
});

router.post('/', function(req, res, next){

	
	

	var nodemailer = require('nodemailer');
	var smtpTransport = nodemailer.createTransport('SMTP', {
		service : 'Gmail' ,
			auth : {
				user : 'pratitidas39@gmail.com' ,
				pass : 'pratiti09091993'
			}
		}
	);

	var mailoptions = {
		from : 'pratitidas39@gmail.com' ,
		to : 'logicsquarekiran@gmail.com' ,
		subject : 'hello world!' ,
		text : 'Plain text example'
	} ;

	smtpTransport.sendMail( mailoptions , function ( err) {
		if(err){
			console.log(err);
		}else{
				console.log('message sent') ;

		}
	});
});


module.exports = router;
