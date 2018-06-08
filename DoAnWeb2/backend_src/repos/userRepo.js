var db = require('../fn/mysql-db');
var md5 = require('md5');
exports.loadAll = function() {
	var sql = 'select * from taikhoan';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from taikhoan where Email = '${id}'`;
	return db.load(sql);
}

exports.add = function (poco) {
	var md5_password = md5(poco.Password);

	var sql = `insert into taikhoan(Email,Password,HoTen,DiaChi,SDT,Active ) values( '${poco.Email}','${md5_password}','${poco.Name}','${poco.Diachi}', '${poco.SDT}','0')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from taikhoan where Email = ${id}`;
	return db.delete(sql);
}