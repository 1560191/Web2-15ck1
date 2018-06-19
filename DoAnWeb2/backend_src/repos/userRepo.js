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
exports.kiemtra = function(email) {
	var sql = `select * from xinban where Email = '${email}'`;
	return db.load(sql);
}
exports.findUser = function(email,pwd) {
	var md5_password = md5(pwd);
	var sql = `select * from taikhoan where Email = '${email}' and Password = '${md5_password}'`;
	return db.load(sql);
}
exports.findUser1 = function(email,pwd) {
	var sql = `select * from taikhoan where Email = '${email}' and Password = '${pwd}'`;
	return db.load(sql);
}
exports.add = function (poco) {
	var md5_password = md5(poco.Password);
	var sql = `insert into taikhoan(Email,Password,HoTen,DiaChi,SDT,Active,Permission ) values( '${poco.Email}','${md5_password}','${poco.Name}','${poco.Diachi}', '${poco.SDT}','0','${poco.Permission}')`;
	return db.insert(sql);
}

exports.addkh = function (poco) {
	var sql = `insert into khachhang(IDUser) values('${poco.Email}')`;
	return db.insert(sql);
}

exports.delete = function(_email) {
	var sql = `delete from taikhoan where Email = '${_email}'`;
	return db.delete(sql);
}

exports.update = function(_pwd,_email) {
	var md5_password = md5(_pwd);
	var sql = `update taikhoan SET Password = '${md5_password}' where Email = '${_email}'`;
	return db.update(sql);
}
exports.like = function(_id,email) {
	var sql = `insert into yeuthich(Email,ID) values( '${email}','${_id}')`;
	return db.load(sql);
}
exports.dislike = function(_id,email) {
	var sql = `delete  from  yeuthich where Email = '${email}' and ID = '${_id}'`;
	return db.load(sql);
}
exports.ragia = function(_id,email,gia) {
	var sql = `insert into daugia(Email,IDSP,Gia) values( '${email}','${_id}','${gia}')`;
	return db.load(sql);
}
exports.xinban = function (email) {
	var sql = `insert into xinban(Email,Active) values('${email}',0)`;
	return db.insert(sql);
}