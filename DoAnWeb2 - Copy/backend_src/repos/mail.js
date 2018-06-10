var db = require('../fn/mysql-db');
exports.update = function(email) {
	var sql = `update taikhoan set Active = 1 where email = '${email}'`;
	return db.load(sql);
}