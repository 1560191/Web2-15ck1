var express = require('express');
var userRepo = require('../repos/userRepo');
var sanphamRepo = require('../repos/sanphamRepo');
var router = express.Router();

router.get('/', (req, res) => {
    userRepo.loadAll().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

// 
// categories/5

// router.get('/:id', (req, res) => {
// 	if (req.params.id) {
// 		var id = req.params.id;

// 		if (isNaN(id)) {
// 			res.statusCode = 400;
// 			res.end();
// 			return;
// 		}

// 		userRepo.load(id).then(rows => {
// 			if (rows.length > 0) {
// 				res.json(rows[0]);
// 			} else {
// 				res.statusCode = 204;
// 				res.end();
// 			}
// 		}).catch(err => {
// 			console.log(err);
// 			res.statusCode = 500;
// 			res.json('error');
// 		});
// 	} else {
// 		res.statusCode = 400;
// 		res.json('error');
// 	}
// });

router.post('/', (req, res) => {
	userRepo.add(req.body)
		.then(insertId => {
			res.statusCode = 201;
			res.json(req.body);
		})
		.catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
	userRepo.addkh(req.body)
		.then(insertId => {
			res.statusCode = 201;
			res.json(req.body);
		})
		.catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
});
router.get('/like/:_id/:emaila', (req, res) => {
	var email = req.params.emaila;
	var _id = req.params._id;
    userRepo.like(_id,email)
		.then(insertId => {
			res.statusCode = 201;
			res.send('1');
		})
		.catch(err => {
		res.send('2');
		});
});
router.get('/ragia/:_id/:emaila/:gia', (req, res) => {
	var email = req.params.emaila;
	var _id = req.params._id;
	var gia = req.params.gia;
    userRepo.ragia(_id,email,gia)
		.then(insertId => {
			sanphamRepo.ragiatc(_id,gia)
			res.statusCode = 201;
			res.send('1');
		})
		.catch(err => {
		res.send('2');
		});
});

router.delete('/del/:_email', (req, res) => {
	if (req.params._email) {
		var _email = req.params._email;

		userRepo.delete(_email).then(affectedRows => {
			res.json({
				affectedRows: affectedRows
			});
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

router.get('/update/:pwd/:email', (req, res) => {
	if (req.params.pwd) {
		var email = req.params.email;
		var pwd = req.params.pwd;

		userRepo.update(pwd,email);
		res.send('ok');
	} else {
		res.statusCode = 400;
		res.json('error');
	}
});

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