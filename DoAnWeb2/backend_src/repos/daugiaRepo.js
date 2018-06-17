var db = require('../fn/mysql-db'),
	constants = require('../fn/const');

exports.loadAll = function() {
	var sql = 'select * from daugia';
	return db.load(sql);
}

exports.loadIDSP = function(id) {
	var sql = `select * from daugia where IDSP = ${id}`;
	return db.load(sql);
}