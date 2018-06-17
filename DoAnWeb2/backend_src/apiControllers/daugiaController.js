var express = require('express');
var daugiaRepo = require('../repos/daugiaRepo');

var router = express.Router();

router.get('/', (req, res) => {
    daugiaRepo.loadAll().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/lichsu/:id', (req, res) => {
    var id = req.params.id;
    daugiaRepo.loadIDSP(id).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

module.exports = router;