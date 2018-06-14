var express = require('express');
var userRepo = require('../repos/userRepo');
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/:token',function(req, res, next) {
  var token = req.params.token || req.query.token || req.headers['x-access-token'];
  if (token) {

    jwt.verify(token, 'jsonwebtoken', function(err, decoded) {      
      if (err) {    	
        res.send('0');
      } else {
      	var user = decoded
      	if(user.Permission == '3')
      	{
        res.send(user.Hoten);
    	}
    	else
    	{
    	res.send('0');
    	} 
    	
      }
    });
  } else {
    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.' 
    });
  }
});
router.get('/:email/:pwd', (req, res) => {
	var email = req.params.email;
	var pwd = req.params.pwd;
	userRepo.findUser(email,pwd)
		.then(rows => {
		if (rows.length > 0) {
			var user = {
			Email:	rows[0].Email,
			Password: rows[0].Password,
			Hoten: rows[0].Hoten,
			Permission: rows[0].Permission
			};			
			var token = jwt.sign(user, 'jsonwebtoken');
        //     res.send({
        //     token: token,
        //     Active: rows[0].Active
        // });
        if(rows[0].Permission == '3')
        {
        res.send(token);
    	}
    	else
    	{
    	res.send('1');	
    	}
		} else if (rows.length == 0) {
			
			res.send('0');
		}
	}).catch(err => {
		console.log(err);
		res.statusCode = 500;
		res.json('error');
	});
});


router.post('/:token', function(req, res, next) {
	var token = req.params.token;
	if (token) {
		 jwt.verify(token, 'jsonwebtoken', function(err, decoded) {      
  //     if (err) {
    //     return res.json({ success: false, message: 'Failed to authenticate token.' });    
    //   } else {
        res.json(decoded);
      // }
     });
    
  } else {
		res.status(403).send({ 
      success: false, 
      message: 'No token provided.' 
    });
	}
});

module.exports = router;