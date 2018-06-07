var express = require('express');
var sanphamRepo = require('../repos/sanphamRepo'),
	constants = require('../fn/const');

var router = express.Router();

router.get('/', (req, res) => {
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.loadPage(page).then(rows => {
        var hasMore = rows.length > constants.PRODUCTS_PER_PAGE;
        if (hasMore) {
            rows.pop();
        }

        var data = {
            sanpham: rows,
            hasMore: hasMore
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/:top5ragia', (req, res) => {
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.loadTopRaGia(page).then(rows => {
        var hasMore = rows.length > constants.PRODUCTS_PER_PAGE2;
        if (hasMore) {
            rows.pop();
        }

        var data = {
            sanpham: rows,
            hasMore: hasMore
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/:top5giacao', (req, res) => {
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.loadTopRaGia(page).then(rows => {
        var hasMore = rows.length > constants.PRODUCTS_PER_PAGE2;
        if (hasMore) {
            rows.pop();
        }

        var data = {
            sanpham: rows,
            hasMore: hasMore
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/:top5ketthuc', (req, res) => {
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.loadKetThuc(page).then(rows => {
        var hasMore = rows.length > constants.PRODUCTS_PER_PAGE2;
        if (hasMore) {
            rows.pop();
        }

        var data = {
            sanpham: rows,
            hasMore: hasMore
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/:timkiem', (req, res) => {
    sanphamRepo.timKiem().then(rows => {
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