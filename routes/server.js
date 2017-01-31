  var express = require('express');
  var nodemailer = require('nodemailer');
  var router = express.Router();


  router.get('/',  function(req, res, next){
  	//console.log('server.js');
  	res.render('sendemail', { title : 'Compose email'});
  });


  router.post('/', function (req, res, next){
  	//console.log(req.body);
  	var receiver = req.body.receiverEmailId ;
  	var subject = req.body.subject ;
  	var body = req.body.body ;

  	var transport = nodemailer.createTransport({
  		host : 'smtp-pulse.com' ,
  		port : 465 ,
  		secure : true ,
  		auth : {
  			user : 'gorai.ranjit13@gmail.com' ,
  			pass : 'W3M75gXCD8'

  		}

  	});
  	var mailOption = {
  		from : 'gorai.ranjit13@gmail.com' ,
  		to : receiver ,
  		subject : subject ,
  		text :  body
  	};

  	transport.sendMail( mailOption , function (err, mail){
  		if(err){
  			console.log(err);
  		}else{
  			res.json({
  				error : false ,
  				msg : 'Email sent'
  			});
  		}
  	})
  });



  module.exports = router ;