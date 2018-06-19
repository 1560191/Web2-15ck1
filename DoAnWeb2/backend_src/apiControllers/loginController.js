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
        if(user.Active == '1')
        {
          var email = user.Email
          var pwd = user.Password
        userRepo.findUser1(email,pwd).then(rows => {
         if (rows.length > 0) {
      var user = {
      Ten: rows[0].Hoten,
      Permission: rows[0].Permission,
      Email: rows[0].Email
      };
      res.send(user);
      }      
        }).catch(err => {
    console.log(err);
    res.statusCode = 500;
    res.send('0');
  });

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
      Email:  rows[0].Email,
      Password: rows[0].Password,
      Hoten: rows[0].Hoten,
      Active: rows[0].Active
      };      
      var token1 = jwt.sign(user, 'jsonwebtoken');
        //     res.send({
        //     token: token,
        //     Active: rows[0].Active
        // });
        if(rows[0].Active == '1')
        {
          var user1 = {
            token: token1,
            email: rows[0].Email,
          };
        res.send(JSON.stringify(user1));
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

/*router.get('/:email', (req, res) => {
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
});*/
module.exports = router;