var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from taikhoan';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from taikhoan where Email = ${id}`;
	return db.load(sql);
}

exports.add = function(poco) {
	// poco = {
	// 	CatID: 1,
	// 	CatName: 'new name'
	// }
	
	var sql = `insert into taikhoan(Email,Password,Hoten,Diachi) values('${poco.Email}','${poco.Password}','${poco.Hoten}','${poco.Diachi}'`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from taikhoan where Email = ${id}`;
	return db.delete(sql);
}