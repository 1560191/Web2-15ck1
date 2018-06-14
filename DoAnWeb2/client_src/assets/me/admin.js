$('#btnloginadmin').on('click', function () {
     //alert('clicked');
     var _PASSS = $('#txtPasswordadmin').val();
     var _mail = $('#txtEmailadmin').val();
    if (_mail == "") {
        alert("Tên đăng nhập không được để trống");
        return dieuhuong();
    }
    if (_PASSS == "") {
        alert("Mật khẩu không được để trống");
        return dieuhuong();
    }
    $.ajax({
        url: 'http://localhost:3000/admin/'+_mail+'/'+_PASSS,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res == "0")
        {
            alert('Sai Tên Đăng Nhập Hoặc Mật Khẩu!');
            return dieuhuong();
        }
        else
       
        {   
            alert('Đăng Nhập Thành Công!');
            localStorage.setItem('id_token', res); 
            return dieuhuong();
        }
    
    }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
    });
    function dieuhuong(){
        window.location.href = "http://localhost:8080/admin.html"; 
    }
});


$('#duyet').on('click', function() {
    var token = localStorage.getItem('id_token');
    $.ajax({
        url: 'http://localhost:3000/admin/'+token,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res != "0")
        {   
            var cn = {
                cn1: 'Danh Sách Xin Bán'
            };
            var source = $('#chucnang-temp').html();
            var template = Handlebars.compile(source);
            $('#chucnang').html(template(cn));
        }
        else
        {
            alert('Bạn Chưa Đăng Nhập!');
        }
    })
});


$('#qlnd').on('click', function() {
    var token = localStorage.getItem('id_token');
    $.ajax({
        url: 'http://localhost:3000/admin/'+token,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res != "0")
        {   
            var cn = {
        cn1: 'Xem Tất Cả Người Dùng',
        cn2: 'Xóa Người Dùng',
        cn3: 'Reset Mật Khẩu'
    };
    
        $.ajax({
            url: 'http://localhost:3000/user',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-alluser').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td>' +
                item.Email +
                '</td>' +
                '<td>' +
                item.Hoten +
                '</td>' +
                '<td>' +
                item.Diachi +
                '</td>' +
                '<td>' +
                item.SDT +
                '</td>' +
                '<td>' +
                item.KhoiTao +
                '</td>' +
                '<td>' +
                item.Permission +
                '</td>' +
            '</tr>';
            
            $('#list').append(tr);
            });
        });
    var source = $('#chucnang-temp').html();
    var template = Handlebars.compile(source);
    $('#chucnang').html(template(cn));
        }
        else
        {
            alert('Bạn Chưa Đăng Nhập!');
        }
    })
});

$('#qlsp').on('click', function() {
    var token = localStorage.getItem('id_token');
    $.ajax({
        url: 'http://localhost:3000/admin/'+token,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res != "0")
        {   
            var cn = {
        cn1: 'Thêm Danh Mục Đấu Giá',
        cn2: 'Sửa Danh Mục Đấu Giá',
        cn3: 'Xóa Danh Mục Đấu Giá'
    };
    $.ajax({
            url: 'http://localhost:3000/danhmuc',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-allDM').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td><center>' +
                item.IDdanhmuc +
                '</center></td>' +
                '<td><center>' +
                item.danhmucsp +
                '</center></td>' +
            '</tr>';
            
            $('#listDM').append(tr);
            });
        });
    var source = $('#chucnang-temp').html();
    var template = Handlebars.compile(source);
    $('#chucnang').html(template(cn));
        }
        else
        {
            alert('Bạn Chưa Đăng Nhập!');
        }
    })
});

function chucnangcn(cnn){
    if(cnn == 'Danh Sách Xin Bán')
    {
        var st = {
            st1: '1111111111111111111111111111111111111111111111111'
        };
        var source = $('#noidung-temp').html();
        var template = Handlebars.compile(source);
        $('#noidung').html(template(st));
    }
    if(cnn == 'Xem Tất Cả Người Dùng')
    {
        $.ajax({
            url: 'http://localhost:3000/user',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-alluser').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td>' +
                item.Email +
                '</td>' +
                '<td>' +
                item.Hoten +
                '</td>' +
                '<td>' +
                item.Diachi +
                '</td>' +
                '<td>' +
                item.SDT +
                '</td>' +
                '<td>' +
                item.KhoiTao +
                '</td>' +
                '<td>' +
                item.Permission +
                '</td>' +
            '</tr>';
            
            $('#list').append(tr);
            });
        });
    }
    if(cnn == 'Xóa Người Dùng')
    {
        $.ajax({
            url: 'http://localhost:3000/user',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-deluser').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            
            var tr = '<tr>' +
                '<td>' +
                item.Email +
                '</td>' +
                '<td>' +
                item.Hoten +
                '</td>' +
                '<td>' +
                item.Diachi +
                '</td>' +
                '<td>' +
                item.SDT +
                '</td>' +
                '<td>' +
                item.KhoiTao +
                '</td>' +
                '<td>' +
                item.Permission +
                '</td>' +
                '<td>' +
                '<center><a href="javascript:deleteus();"><span class="glyphicon glyphicon-remove"></span> Xóa </a></center>' +
                '</td>' +
                '<input type="hidden" value="'+item.Email+'" id="e">' +
            '</tr>';
            
            $('#listdel').append(tr);
            });
        });
    }
    if(cnn == 'Reset Mật Khẩu')
    {
        $.ajax({
            url: 'http://localhost:3000/user',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-updateuser').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            
            var tr = '<tr>' +
                '<td>' +
                item.Email +
                '</td>' +
                '<td>' +
                item.Hoten +
                '</td>' +
                '<td>' +
                item.Password +
                '</td>' +
                '<td>' +
                '<form><div class="form-group"><textarea class="form-control" rows="1" id="mkmoi"></textarea></div></form>' +
                '</td>' +
                '<td>' +
                '<center><a href="javascript:updateus();"><span class="glyphicon glyphicon-ok"></span> Xác Nhận </a></center>' +
                '</td>' +
                '<input type="hidden" value="'+item.Email+'" id="e2">' +
            '</tr>';
            
            $('#listupdate').append(tr);
            });
        });
    }
    if(cnn == 'Thêm Danh Mục Đấu Giá')
    {

        $.ajax({
            url: 'http://localhost:3000/danhmuc',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source = $('#noidung-temp-addDM').html();
            var template = Handlebars.compile(source);
            $('#noidung').html(template());
            $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td><center>' +
                item.IDdanhmuc +
                '</center></td>' +
                '<td><center>' +
                item.danhmucsp +
                '</center></td>' +
            '</tr>';
            
            $('#listDM').append(tr);
            });
        });
    }
    if(cnn == 'Sửa Danh Mục Đấu Giá')
    {
        $.ajax({
            url: 'http://localhost:3000/danhmuc',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-updateDM').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            
            var tr = '<tr>' +
                '<td><center>' +
                item.IDdanhmuc +
                '</center></td>' +
                '<td><center>' +
                item.danhmucsp +
                '</center></td>' +
                '<td>' +
                '<center><a href="javascript:updateDM('+item.IDdanhmuc+');"><span class="glyphicon glyphicon-ok"></span> Thay Đổi </a></center>' +
                '</td>' +
            '</tr>';
            
            $('#listupdateDM').append(tr);
            });
        });
    }
    if(cnn == 'Xóa Danh Mục Đấu Giá')
    {
        $.ajax({
            url: 'http://localhost:3000/danhmuc',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-delDM').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            
            var tr = '<tr>' +
                '<td><center>' +
                item.IDdanhmuc +
                '</center></td>' +
                '<td><center>' +
                item.danhmucsp +
                '</center></td>' +
                '<td>' +
                '<center><a href="javascript:delDM('+item.IDdanhmuc+');"><span class="glyphicon glyphicon-remove"></span> Xóa </a></center>' +
                '</td>' +
            '</tr>';
            
            $('#listdelDM').append(tr);
            });
        });
    }
};


