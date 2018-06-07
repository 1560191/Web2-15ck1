var db = require('../fn/mysql-db'),
	constants = require('../fn/const');

exports.loadAll = function() {
	var sql = 'select * from sanpham';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from sanpham where ID = ${id}`;
	return db.load(sql);
}

exports.loadPage = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE;
    var sql = `select * from sanpham limit ${constants.PRODUCTS_PER_PAGE + 1} offset ${offset}`;
    return db.load(sql);
}

exports.loadTopRaGia = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE2;
    var sql = `select * from sanpham order by Soluotragia DESC limit ${constants.PRODUCTS_PER_PAGE2 + 1} offset ${offset}`;
    return db.load(sql);
}

exports.loadTopGiaCao = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE2;
    var sql = `select * from sanpham order by Giahientai DESC limit ${constants.PRODUCTS_PER_PAGE2 + 1} offset ${offset}`;
    return db.load(sql);
}

exports.loadKetThuc = function(page) {
    var offset = (page - 1) * constants.PRODUCTS_PER_PAGE2;
    var sql = `select * from sanpham order by Thoigianketthuc DESC limit ${constants.PRODUCTS_PER_PAGE2 + 1} offset ${offset}`;
    return db.load(sql);
}

exports.add = function(poco) {
	// poco = {
	// 	CatID: 1,
	// 	CatName: 'new name'
	// }
	
	var sql = `insert into sanpham(Ten,Phanloai,Hinhanh,Giakhoidiem,Giahientai,Buocgia,Giabanngay,Soluotragia,Thoigianbatdau,Thoigianketthuc,Mota,Nguoiban,Nguoimua) values('${poco.Ten}','${poco.Phanloai}','${poco.Hinhanh}','${poco.Giakhoidiem}','${poco.Giahientai}','${poco.Buocgia}','${poco.Giabanngay}','${poco.Soluotragia}','${poco.Thoigianbatdau}','${poco.Thoigianketthuc}','${poco.Mota}','${poco.Nguoiban}','${poco.Nguoimua}'`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from sanpham where ID = ${id}`;
	return db.delete(sql);
}


exports.timKiem = function(st) {
	var sql = `select * from sanpham where Ten = ${st} or Phanloai = ${st}`;
	return db.load(sql);
}