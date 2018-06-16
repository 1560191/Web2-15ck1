$(function() {
    var token = localStorage.getItem('id_token');
    $.ajax({
        url: 'http://localhost:3000/login/'+token,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res != "0")
        {   
            $('#btnUp').on('click', function() {
                var _ten = $('#txtTensp').val();
                var _loai = $('#txtLoaisp').val();
                var _giabd = $('#txtGiaBD').val();
                var _giahientai = $('#txtGiaBD').val();;
                var _buocgia = $('#txtBuocGia').val();
                var _giabanngay = $('#txtGiaBanNgay').val();
                var _ketthuc = $('#txtThoiGianKetThuc').val();
                var _mota = $('#txtMoTa').val();
                var _nguoiban = res;
                
                $.ajax({
                    url: 'http://localhost:3000/sanpham/add/'+_ten+'/'+_loai+'/'+_giabd+'/'+_giahientai+'/'+_buocgia+'/'+_giabanngay+'/'+_ketthuc+'/'+_mota+'/'+_nguoiban,
                    //dataType: 'json',
                    timeout: 10000
                }).done(function(data) {
                    alert('Đã Thêm Sản Phẩm!')
                });
            });
        }
    
    }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
    });
});
