/*$('#qlSanPham').on('click', function() {
    $('#MainSection').hide();
    $('#tagbar2').hide();
    $('#tagbar3').hide();
    $('#tagbar-danhmuc').hide();
    $('#hienthisp').hide();
    $('#tagbar-danhmuc2').show();
    $('#home').hide();
    $('#backhome').show();
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
    $('#dangban-conhan').on('click', function() {
        $('#product-list').empty();
        var token = localStorage.getItem('id_token');
        $.ajax({
            url: 'http://localhost:3000/login/'+token,
            dataType: 'text',
            timeout: 10000,
        }).done(function(res) {
            if(res != "0")
            {   
                var _email = res;
            $.ajax({
                url: 'http://localhost:3000/sanpham/loadsptheonguoiban/'+_email+'?page=1',
                dataType: 'json',
                timeout: 10000
            }).done(function(data) {
                var aaas = "<script>\
                var countDownDate = new Date('{{Thoigianketthuc}}').getTime();\
                setInterval(function() {\
                var now = new Date().getTime();\
                var distance = countDownDate - now;\
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));\
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);\
                document.getElementById({{ID}}).innerHTML = days + 'Ngày ' + hours + 'Giờ'+ minutes + 'Phút' + seconds + 'Giây'; });\
                </script>\
                {{/each}}";
                //var source2 = $('#dest').html();
                var source = $('#product-template').html();
                var source3 =  source + aaas;
                console.log(source3);
                var template = Handlebars.compile(source3);
                var html = template(data.sanpham);
                $('#product-list').append(html);
                
                $('#product-list').show();
                $('#hienthisp').show();
                });
            }
        });
    });
});*/

$('#qlSanPham').on('click', function() {
    $('#MainSection').hide();
    $('#tagbar2').hide();
    $('#tagbar3').hide();
    $('#tagbar-danhmuc').hide();
    //$('#hienthisp').hide();
    $('#tagbar-danhmuc2').show();
    $('#home').hide();
    $('#backhome').show();
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
    $('#product-list').empty();
    $('.loader').show();
    var token = localStorage.getItem('id_token');
        $.ajax({
            url: 'http://localhost:3000/login/'+token,
            dataType: 'text',
            timeout: 10000,
        }).done(function(res) {
            if(res != "0")
            {   
            var _email = res;
            $.ajax({
                url: 'http://localhost:3000/sanpham/loadsptheonguoiban/'+_email+'?page=1',
                dataType: 'json',
                timeout: 10000
            }).done(function(data) {
                var aaas = "<script>\
                var countDownDate = new Date('{{Thoigianketthuc}}').getTime();\
                setInterval(function() {\
                var now = new Date().getTime();\
                var distance = countDownDate - now;\
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));\
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);\
                document.getElementById({{ID}}).innerHTML = days + 'Ngày ' + hours + 'Giờ'+ minutes + 'Phút' + seconds + 'Giây'; });\
                </script>\
                {{/each}}";
                //var source2 = $('#dest').html();
                var source = $('#ql-dangban-conhang').html();
                var source3 =  source + aaas;
                console.log(source3);
                var template = Handlebars.compile(source3);
                var html = template(data.sanpham);
                $('#product-list').append(html);

                $('#product-list div[style]').fadeIn(200, function() {
                    $(this).removeAttr('style');
                });
                $('#product-list').show();

                $('.loader').hide();
            });
        }
    });
});


$('#dangban-conhan').on('click', function() {
    $('#MainSection').hide();
    $('#tagbar2').hide();
    $('#tagbar3').hide();
    $('#tagbar-danhmuc').hide();
    //$('#hienthisp').hide();
    $('#tagbar-danhmuc2').show();
    $('#home').hide();
    $('#backhome').show();
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
    $('#product-list').empty();
    $('.loader').show();
    var token = localStorage.getItem('id_token');
        $.ajax({
            url: 'http://localhost:3000/login/'+token,
            dataType: 'text',
            timeout: 10000,
        }).done(function(res) {
            if(res != "0")
            {   
            var _email = res;
            $.ajax({
                url: 'http://localhost:3000/sanpham/loadsptheonguoiban/'+_email+'?page=1',
                dataType: 'json',
                timeout: 10000
            }).done(function(data) {
                var aaas = "<script>\
                var countDownDate = new Date('{{Thoigianketthuc}}').getTime();\
                setInterval(function() {\
                var now = new Date().getTime();\
                var distance = countDownDate - now;\
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));\
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);\
                document.getElementById({{ID}}).innerHTML = days + 'Ngày ' + hours + 'Giờ'+ minutes + 'Phút' + seconds + 'Giây'; });\
                </script>\
                {{/each}}";
                //var source2 = $('#dest').html();
                var source = $('#ql-dangban-conhang').html();
                var source3 =  source + aaas;
                console.log(source3);
                var template = Handlebars.compile(source3);
                var html = template(data.sanpham);
                $('#product-list').append(html);

                $('#product-list div[style]').fadeIn(200, function() {
                    $(this).removeAttr('style');
                });
                $('#product-list').show();

                $('.loader').hide();
            });
        }
    });
});


function suamota(id) {
    $('#product-list').empty();
    $('.loader').show();
    $(function() {
        HandlebarsIntl.registerWith(Handlebars);
        loadHome();
    });
    var loadHome = function() {
        $.ajax({
            url: 'http://localhost:3000/sanpham/'+id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source = $('#suamotasp').html();
            var template = Handlebars.compile(source);
            var html = template(data.sanpham);
            $('#product-list').append(html);

            $('#product-list div[style]').fadeIn(200, function() {
                $(this).removeAttr('style');
            });
            $('#product-list').show();
            $('.loader').hide();
        });
    }
};

function updateMoTa(id) {
    var mt = $('#motamoi').val();
    $.ajax({
        url: 'http://localhost:3000/sanpham/update/'+id+'/'+mt,
        //dataType: 'json',
        //timeout: 10000
    }).done(function() {
        $('#product-list').empty();
        alert('Đã Sửa Đổi Mô Tả!')
        $.ajax({
            url: 'http://localhost:3000/sanpham/'+id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source = $('#suamotasp').html();
            var template = Handlebars.compile(source);
            var html = template(data.sanpham);
            $('#product-list').append(html);

            $('#product-list div[style]').fadeIn(200, function() {
                $(this).removeAttr('style');
            });
            $('#product-list').show();
            $('.loader').hide();
        });
    });
};

function lichsu(id) {
    $('#product-list').empty();
    $('.loader').show();
    $(function() {
        HandlebarsIntl.registerWith(Handlebars);
        loadHome();
    });
    var loadHome = function() {
        $.ajax({
            url: 'http://localhost:3000/daugia/lichsu/'+id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#xemlichsu').html();
            var template0 = Handlebars.compile(source0);
            $('#product-list').html(template0());
            $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td>' +
                item.thoigian +
                '</td>' +
                '<td>' +
                item.Gia +
                '</td>' +
                '<td>' +
                item.IDnguoimua +
                '</td>' +
                '<td>' +
                '<center><a href="javascript:kich();"><span class="glyphicon glyphicon-remove"></span> Kích </a></center>' +
                '</td>' +
                '<input type="hidden" value="'+item.IDnguoimua+'" id="idnguoimua">' +
            '</tr>';
            
            $('#listLichsu').append(tr);
            });
        });
    };
};

$('#damua').on('click', function() {
    $('#product-list').empty();
    $('.loader').show();
    $(function() {
        HandlebarsIntl.registerWith(Handlebars);
        loadHome();
    });
    var loadHome = function() {
        $.ajax({
            url: 'http://localhost:3000/daugia/lichsu/'+id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#dsDaCoNguoiMua').html();
            var template0 = Handlebars.compile(source0);
            $('#product-list').html(template0());
            $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td>' +
                item.thoigian +
                '</td>' +
                '<td>' +
                item.Gia +
                '</td>' +
                '<td>' +
                item.IDnguoimua +
                '</td>' +
                '<td>' +
                '<center><a href="javascript:kich();"><span class="glyphicon glyphicon-remove"></span> Kích </a></center>' +
                '</td>' +
                '<input type="hidden" value="'+item.IDnguoimua+'" id="idnguoimua">' +
            '</tr>';
            
            $('#listDamua').append(tr);
            });
        });
    };
});