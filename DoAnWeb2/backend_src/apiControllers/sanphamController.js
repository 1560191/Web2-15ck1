var express = require('express');
var sanphamRepo = require('../repos/sanphamRepo');

var router = express.Router();

router.get('/', (req, res) => {
    sanphamRepo.loadAll().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

// 
// categories/5

router.get('/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;

		if (isNaN(id)) {
			res.statusCode = 400;
			res.end();
			return;
		}

		sanphamRepo.load(id).then(rows => {
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

router.post('/', (req, res) => {
	sanphamRepo.add(req.body)
		.then(insertId => {
			var poco = {
				CatID: insertId,
				Ten: req.body.Ten,
				Phanloai: req.body.Phanloai,
				Hinhanh: req.body.Hinhanh,
				Giakhoidiem: req.body.Giakhoidiem,
				Giahientai: req.body.Giahientai,
				Buocgia: req.body.Buocgia,
				Giabanngay: req.body.Giabanngay,
				Soluotragia: req.body.Soluotragia,
				Thoigianbatdau: req.body.Thoigianbatdau,
				Thoigianketthuc: req.body.Thoigianketthuc,
				Mota: req.body.Mota,
				Nguoiban: req.body.Nguoiban,
				Nguoimua: req.body.Nguoimua
			};
			res.statusCode = 201;
			res.json(poco);
		})
		.catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end();
		});
});


router.delete('/:id', (req, res) => {
	if (req.params.id) {
		var id = req.params.id;

		if (isNaN(id)) {
			res.statusCode = 400;
			res.end();
			return;
		}

		sanphamRepo.delete(id).then(affectedRows => {
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

module.exports = router;