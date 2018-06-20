var express = require('express');
var qlsanphamnguoidungRepo = require('../repos/qlsanphamnguoidungRepo'),
	constants = require('../fn/const');

var router = express.Router();

router.get('/dangban/:email', (req, res) => {
    var email = req.params.email;
    qlsanphamnguoidungRepo.loadAllToTime(email).then(rows => {
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

router.get('/damua/:email', (req, res) => {
    var email = req.params.email;
    qlsanphamnguoidungRepo.loadAllCoNguoiMua(email).then(rows => {
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

router.get('/lichsu/:id', (req, res) => {
    var id = req.params.id;
    qlsanphamnguoidungRepo.loadLichSu(id).then(rows => {
        var hasMore = rows.length > 100;
        if (hasMore) {
            rows.pop();
        }

        var data = {
            daugia: rows,
            hasMore: hasMore
        }
        res.json(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/kick/:id/:_email', (req, res) => {
    if (req.params._email) {
        var email = req.params._email;
        var id = req.params.id;
        qlsanphamnguoidungRepo.kicknguoimua(id,email);
        res.send('ok');
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

router.get('/updateNguoiMua/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;
        qlsanphamnguoidungRepo.updateNguoiMua(id);
        res.send('ok');
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

router.get('/congdiem/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
        qlsanphamnguoidungRepo.updateCongDiem(email);
        res.send('ok');
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

router.get('/trudiem/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
        qlsanphamnguoidungRepo.updateTruDiem(email);
        res.send('ok');
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});

router.get('/kiemtra/:id/:email', (req, res) => {
    if (req.params.email) {
        var id = req.params.id;
        var email = req.params.email;
        qlsanphamnguoidungRepo.kiemTraDSDen(id,email).then(rows => {
            if (rows.length > 0) {
                res.send('1');
            }
            else{
                res.send('0');
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

router.get('/dangdaugia/:email', (req, res) => {
    var email = req.params.email;
    qlsanphamnguoidungRepo.DangDauGia(email).then(rows => {
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

router.get('/dathang/:email', (req, res) => {
    var email = req.params.email;
    qlsanphamnguoidungRepo.DaThang(email).then(rows => {
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


module.exports = router;