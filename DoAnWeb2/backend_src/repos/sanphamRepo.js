var db = require('../fn/mysql-db');

exports.loadAll = function() {
	var sql = 'select * from sanpham';
	return db.load(sql);
}

exports.load = function(id) {
	var sql = `select * from sanpham where ID = ${id}`;
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