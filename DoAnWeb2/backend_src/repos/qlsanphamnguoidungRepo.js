var db = require('../fn/mysql-db'),
	constants = require('../fn/const');

exports.loadAll = function() {
	var sql = 'select * from sanpham';
	return db.load(sql);
}

exports.loadAllToTime = function(_email) {
	var sql = `select * from sanpham where Nguoiban = '${_email}' and NOW() < Thoigianketthuc`;
	return db.load(sql);
}

exports.loadLichSu = function(_id) {
    var sql = `select * from daugia where IDSP = '${_id}' ORDER BY thoigian DESC`;
    return db.load(sql);
}

exports.loadAllCoNguoiMua = function(_email) {
    var sql = `select * from sanpham where Nguoiban = '${_email}' and Nguoimua IS NOT NULL`;
    return db.load(sql);
}

exports.kicknguoimua = function(_id,_email) {
    var sql = `delete from daugia where Email = '${_email}' and IDSP = ${_id}`;
    return db.delete(sql);
}

exports.updateCongDiem = function(_email) {
    var sql = `update khachhang SET Diemdanhgia = Diemdanhgia + 1 where IDUser = '${_email}'`;
    return db.update(sql);
}

exports.updateTruDiem = function(_email) {
    var sql = `update khachhang SET Diemdanhgia = Diemdanhgia - 1 where IDUser = '${_email}'`;
    return db.update(sql);
}

exports.updateNguoiMua = function(_id) {
    var sql = `update sanpham SET Nguoimua = (select Email from daugia order by Gia DESC limit 1) where ID = ${_id}`;
    return db.update(sql);
}

exports.kiemTraDSDen = function(_id,_email) {
    var sql = `select * from dsden where IDsanpham = ${_id} and Email = '${_email}'`;
    return db.load(sql);
}

exports.DangDauGia = function(_email) {
    var sql = `select * from daugia dg, sanpham sp where dg.Email = '${_email}' and dg.IDSP = sp.ID`;
    return db.load(sql);
}

exports.DaThang = function(_email) {
    var sql = `select * from daugia dg, sanpham sp where dg.Email = '${_email}' and dg.IDSP = sp.ID and sp.Thoigianketthuc < NOW() order by dg.Gia DESC limit 1`;
    return db.load(sql);
}