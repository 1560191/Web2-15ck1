var express = require('express');
var userRepo = require('../repos/userRepo');
var jwt = require('jsonwebtoken');
var router = express.Router();
// router.post('/',function(req, res) {
// 	var email = req.body.email;
// 	var password = req.body.password;
//   userRepo.loaduserpass({email,password}, function(err, user) {
//     if (err) throw err;
//     if (!user) {
//       res.json({ success: false, message: 'Authentication failed. User not found.' });
//     } else if (user) {
//       if (user.password != req.body.password) {
//         res.json({ success: false, message: 'Authentication failed. Wrong password.' });
//       } else {
//         var token = jwt.sign(user, 'jsonwebtoken', {
//           expiresInMinutes: 1440 
//         });
//         res.json(user);
//         // res.json({
//         //   success: true,
//         //   message: 'Enjoy your token!',
//         //   token: token
//         // });
//       }   
//     }
//   });
// });
router.post('/', (req, res) => {
		var email = req.body.email;
		var password = req.body.password;
			userRepo.loaduserpass(email,password).then(rows => {
				 if (rows.length > 0) {
				 console.log(rows[0]);
				res.json(rows);
			}
			else
			{

				console.log("nản");
			}
			// if (rows.length > 0) {
			// 	var user = {
			// 		Mauser: rows[0].Mauser,
			// 		UserName: rows[0].UserName,
			// 		email: rows[0].email,
			// 		diachi: rows[0].diachi,
			// 		Pass: rows[0].Pass,
			// 		sdt: rows[0].sdt
			// 	};
			// 	// var token = jwt.sign(user,'jsonwebtoken');
   //  //     res.json({
   //  //       token: token,
   //  //       users: user
			// 	// });
			// 	res.json(rows[0]);
			// } else {
			// 	res.json("null")
			// }


		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.json("err");
		});

});


// router.post('/:token', (req, res) => {
//     if (req.params.token) {
//         var token = req.params.token;
//         jwt.verify(token, 'jsonwebtoken', function(err, decoded) {      
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });    
//       } else {
//         req.decoded = decoded;    
//         next();
//       }
//     });
        
//     } else {
//         res.statusCode = 400;
//         res.json('error');
//     }
// });
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
// router.get('/:token',function(req, res, next) {
//   var token = req.params.token || req.query.token || req.headers['x-access-token'];
//   if (token) {

//     jwt.verify(token, 'jsonwebtoken', function(err, decoded) {      
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });    
//       } else {
//         req.decoded = decoded;    
//         next();
//       }
//     });
//   } else {
//     return res.status(403).send({ 
//       success: false, 
//       message: 'No token provided.' 
//     });
//   }
// });

router.get('/:email', (req, res) => {
	if (req.params.email) {
		var email = req.params.email;


		userRepo.load(email).then(rows => {
			if (rows.length > 0) {
				res.json(rows[0]);
			} else {
				res.statusCode = 204;
				res.end();
			}
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.json('error');
		});
	} else {
		res.statusCode = 400;
		res.json('error');
	}
});
module.exports = router;