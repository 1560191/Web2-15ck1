var db = require('../fn/mysql-db');
exports.update = function(email) {
	var sql = `update taikhoan set Active = 1 where email = '${email}'`;
	return db.load(sql);
}
exports.findsp = function(id) {
	var sql = `select *  from sanpham where ID = '${id}' `;
	return db.load(sql);
}