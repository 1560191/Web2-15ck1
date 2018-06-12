$('#duyet').on('click', function() {
    var cn = {
        cn1: 'Danh Sách Xin Bán'
    };
    var source = $('#chucnang-temp').html();
    var template = Handlebars.compile(source);
    $('#chucnang').html(template(cn));
});


$('#qlnd').on('click', function() {
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
});

$('#qlsp').on('click', function() {
    var cn = {
        cn1: 'Thêm Danh Mục Đấu Giá',
        cn2: 'Sửa Danh Mục Đấu Giá',
        cn3: 'Xóa Danh Mục Đấu Giá'
    };
    var source = $('#chucnang-temp').html();
    var template = Handlebars.compile(source);
    $('#chucnang').html(template(cn));
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
        var st = {
            st1: '5555555555555555555555555555555555555555555555555'
        };
        var source = $('#noidung-temp').html();
        var template = Handlebars.compile(source);
        $('#noidung').html(template(st));
    }
    if(cnn == 'Sửa Danh Mục Đấu Giá')
    {
        var st = {
            st1: '6666666666666666666666666666666666666666666666666'
        };
        var source = $('#noidung-temp').html();
        var template = Handlebars.compile(source);
        $('#noidung').html(template(st));
    }
    if(cnn == 'Xóa Danh Mục Đấu Giá')
    {
        var st = {
            st1: '7777777777777777777777777777777777777777777777777'
        };
        var source = $('#noidung-temp').html();
        var template = Handlebars.compile(source);
        $('#noidung').html(template(st));
    }
};

