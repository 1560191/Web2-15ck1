var db = require('../fn/mysql-db');
var md5 = require('md5');
exports.loadAll = function() {
	var sql = 'select * from taikhoan';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from taikhoan tk, khachhang kh where tk.Email = '${id}' and tk.Email = kh.IDUser`;
	return db.load(sql);
}
exports.kiemtra = function(email) {
	var sql = `select * from xinban where Email = '${email}'`;
	return db.load(sql);
}
exports.ktgia = function(id,email) {
	var sql = `select * from daugia where Email = '${email}' and IDSP = ${id}`;
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
exports.creategia = function(_id,gia,email) {
	var sql = `insert into daugia (Email,IDSP,Gia) values('${email}', ${_id}, ${gia})`;
	return db.insert(sql);
}
exports.setgia = function(_id,gia,email) {
    var sql = `update daugia SET Gia = ${gia} where IDSP = ${_id} and Email = '${email}'`;
    return db.update(sql);
}
exports.xinban = function (email) {
	var sql = `insert into xinban(Email,Active) values('${email}',0)`;
	return db.insert(sql);
}

exports.loadDSXinBan = function() {
	var sql = 'select * from xinban xb, khachhang kh where xb.Active = 0 and xb.Email = kh.IDUser';
	return db.load(sql);
}

exports.updateActiveXinBan = function(_email) {
	var sql = `update xinban SET Active = 1, thoigianbatdau = NOW(), thoigianketthuc = ADDTIME(NOW(),'168:0:0.0') where Email = '${_email}'`;
	return db.update(sql);
}
exports.uptatetk = function(email,pass) {
	var md5_pass = md5(pass);
	var sql = `update taikhoan SET Password = '${md5_pass}' where Email = '${email}'`;
	return db.update(sql);
}
exports.uptatetk1 = function(email,fullname,Phone,addresss) {
	var sql = `update taikhoan SET Hoten = '${fullname}',Diachi = '${addresss}',SDT = '${Phone}' where Email = '${email}'`;
	return db.update(sql);
}
exports.updatePermission = function(_email) {
	var sql = `update taikhoan SET Permission = 2 where Email = '${_email}'`;
	return db.update(sql);
}

exports.deleteXinBan = function(_email) {
	var sql = `delete from xinban where Email = '${_email}'`;
	return db.delete(sql);
}

exports.deleteTaiKhoan = function(_email) {
	var sql = `delete from taikhoan where Email = '${_email}'`;
	return db.delete(sql);
}

exports.deleteKhachHang = function(_email) {
	var sql = `delete from khachhang where IDUser = '${_email}'`;
	return db.delete(sql);
}

exports.deleteSanPham = function(_email) {
	var sql = `delete from sanpham where Nguoiban = '${_email}'`;
	return db.delete(sql);
}

exports.deleteYeuThich = function(_email) {
	var sql = `delete from yeuthich where Email = '${_email}'`;
	return db.delete(sql);
}