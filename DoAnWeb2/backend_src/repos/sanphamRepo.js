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

exports.ttNguoiBanTheoIDSP = function(id) {
	var sql = `select * from sanpham sp, taikhoan tk, khachhang kh where sp.ID = ${id} and sp.Nguoiban = tk.Email and tk.Email = kh.IDUser`;
	return db.load(sql);
}

exports.loadPage = function(page) {
    var offset = (page - 1) * 6;
    var sql = `select * from sanpham limit ${6 + 1} offset ${offset}`;
    return db.load(sql);
}

exports.loadCate = function() {
    var sql = `select DISTINCT Phanloai from sanpham` ;
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

exports.sapXepGia = function(page) {
    var offset = (page - 1) * 6;
    var sql = `select * from sanpham order by Giahientai DESC limit ${6 + 1} offset ${offset}`;
    return db.load(sql);
}

exports.sapXepNgay = function(page) {
    var offset = (page - 1) * 6;
    var sql = `select * from sanpham order by Thoigianketthuc DESC limit ${6 + 1} offset ${offset}`;
    return db.load(sql);
}


exports.add = function(Ten,Phanloai,Giakhoidiem,Giahientai,Buocgia,Giabanngay,day,Mota,Nguoiban) {
	// poco = {
	// 	CatID: 1,
	// 	CatName: 'new name'
	// }
	
	var sql = `insert into sanpham(Ten,Phanloai,Hinhanh,Giakhoidiem,Giahientai,Buocgia,Giabanngay,Soluotragia,Thoigianbatdau,Thoigianketthuc,Mota,Nguoiban) values('${Ten}','${Phanloai}','imgs/ID/main_thumbs.jpg',${Giakhoidiem},${Giahientai},${Buocgia},${Giabanngay},0,NOW(),DATE_ADD(NOW(), INTERVAL ${day} DAY),'${Mota}','${Nguoiban}')`;
	return db.insert(sql);
}

exports.delete = function(id) {
	var sql = `delete from sanpham where ID = ${id}`;
	return db.delete(sql);
}


exports.timKiem = function(search,page) {
	var offset = (page - 1) * 6;
    var sql = `select * from sanpham where Ten like '%${search}%' or Phanloai like '%${search}%' limit ${6 + 1} offset ${offset}`;
    return db.load(sql);
}