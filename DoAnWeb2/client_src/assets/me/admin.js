$('#duyet').on('click', function() {
    var cn = {
        cn1: 'Danh Sách Xin Bán'
    };
    var source = $('#chucnang-temp').html();
    var template = Handlebars.compile(source);
    $('#chucnang').html(template(cn));
});


$('#qlsp').on('click', function() {
    var cn = {
        cn1: 'Xem Tất Cả Người Dùng',
        cn2: 'Xóa Người Dùng',
        cn3: 'Reset Mật Khẩu'
    };
    var source = $('#chucnang-temp').html();
    var template = Handlebars.compile(source);
    $('#chucnang').html(template(cn));
});

$('#qlnd').on('click', function() {
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
        var st = {
            st1: '2222222222222222222222222222222222222222222222222'
        };
        var source = $('#noidung-temp').html();
        var template = Handlebars.compile(source);
        $('#noidung').html(template(st));
    }
    if(cnn == 'Xóa Người Dùng')
    {
        var st = {
            st1: '3333333333333333333333333333333333333333333333333'
        };
        var source = $('#noidung-temp').html();
        var template = Handlebars.compile(source);
        $('#noidung').html(template(st));
    }
    if(cnn == 'Reset Mật Khẩu')
    {
        var st = {
            st1: '4444444444444444444444444444444444444444444444444'
        };
        var source = $('#noidung-temp').html();
        var template = Handlebars.compile(source);
        $('#noidung').html(template(st));
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