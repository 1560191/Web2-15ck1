var express = require('express');
var danhmucRepo = require('../repos/danhmucRepo');

var router = express.Router();

router.get('/', (req, res) => {
    danhmucRepo.loadAll().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});


router.get('/add/:danhmuc', (req, res) => {
	if (req.params.danhmuc) {
		var danhmuc = req.params.danhmuc;

		danhmucRepo.add(danhmuc).then(insertId => {
			res.send('ok');
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


router.delete('/del/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;

		danhmucRepo.delete(id).then(affectedRows => {
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

router.get('/update/:danhmuc/:id', (req, res) => {
	if (req.params.danhmuc) {
		var id = req.params.id;
		var danhmuc = req.params.danhmuc;

		danhmucRepo.update(danhmuc,id);
		res.send('ok');
	} else {
		res.statusCode = 400;
		res.json('error');
	}
});

module.exports = router;