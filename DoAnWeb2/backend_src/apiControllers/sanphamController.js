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
        var hasMore = rows.length > 6;
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

router.get('/loadsptheonguoiban/:email', (req, res) => {
    var _email = req.params.email;
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.loadSPTheoNguoiBan(_email,page).then(rows => {
        var hasMore = rows.length > 100;
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

router.get('/top5ragia', (req, res) => {
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

router.get('/top5giacao', (req, res) => {
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.loadTopGiaCao(page).then(rows => {
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

router.get('/top5ketthuc', (req, res) => {
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

router.get('/cate', (req, res) => {

    sanphamRepo.loadCate().then(rows => {
        var data = {
            sanpham: rows,
            
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/timkiem/:search', (req, res) => {
    var page = 1;
    var search = req.params.search;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.timKiem(search,page).then(rows => {
        var hasMore = rows.length > 6;
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

router.get('/sapxepgia', (req, res) => {
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.sapXepGia(page).then(rows => {
        var hasMore = rows.length > 6;
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

router.get('/sapxepngay', (req, res) => {
    var page = 1;
    if (req.query.page) {
        page = +req.query.page;
    }

    sanphamRepo.sapXepNgay(page).then(rows => {
        var hasMore = rows.length > 6;
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

// 
// categories/5

router.get('/:id', (req, res) => {
    var idsp = req.params.id;
    sanphamRepo.ttNguoiBanTheoIDSP(idsp).then(rows => {
        var hasMore = rows.length > 6;
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
router.get('/daugiakq/:id', (req, res) => {
    var idsp = req.params.id;
    sanphamRepo.daugiakq(idsp).then(rows => {
        var hasMore = rows.length > 6;
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
router.get('/muangay/:_id/:emaila', (req, res) => {
    var email = req.params.emaila;
    var _id = req.params._id;
    sanphamRepo.muangay(_id,email)
        .then(insertId => {
            res.statusCode = 201;
            res.send('1');
        })
        .catch(err => {
        res.send('2');
        });
});
router.get('/add/:Ten/:Phanloai/:Giakhoidiem/:Giahientai/:Buocgia/:Giabanngay/:day/:Mota/:Nguoiban', (req, res) => {
    if (req.params.Ten) {
        var Ten = req.params.Ten;
        var Phanloai = req.params.Phanloai;
        var Giakhoidiem = req.params.Giakhoidiem;
        var Giahientai = req.params.Giahientai;
        var Buocgia = req.params.Buocgia;
        var Giabanngay = req.params.Giabanngay;
        var day = req.params.day;
        var Mota = req.params.Mota;
        var Nguoiban = req.params.Nguoiban;
        

        sanphamRepo.add(Ten,Phanloai,Giakhoidiem,Giahientai,Buocgia,Giabanngay,day,Mota,Nguoiban);
        res.send('ok');
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

router.get('/update/:id/:mota', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;
        var mota = req.params.mota;

        sanphamRepo.updateMoTa(id,mota);
        res.send('ok');
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

module.exports = router;