var db = require('../fn/mysql-db');
exports.update = function(email) {
	var sql = `update user set active = 1 where email = '${email}'`;
	return db.load(sql);
}