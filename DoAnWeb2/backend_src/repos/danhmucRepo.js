var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from danhmuc';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from danhmuc where IDdanhmuc = ${id}`;
	return db.load(sql);
}

exports.add = function(_danhmuc) {
	var sql = `insert into danhmuc(danhmucsp) values('${_danhmuc}')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from danhmuc where IDdanhmuc = ${id}`;
	return db.delete(sql);
}

exports.update = function(_danhmuc,_id) {
	var sql = `update danhmuc SET danhmucsp = '${_danhmuc}' where IDdanhmuc = '${_id}'`;
	return db.update(sql);
}