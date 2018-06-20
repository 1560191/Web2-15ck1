$('#title-dangban-conhan').hide();
$('#title-damua').hide();
$('#title-lichsu').hide();
$('#title-top1').hide();
$('#body-dangban-conhan').hide();
$('#body-damua').hide();
$('#body-lichsu').hide();
$('#body-lichsu-chitiet').hide();
$('#body-top1').hide();
$('#title-dangdg').hide();
$('#title-dathang').hide();
$('#body-dangdg').hide();
$('#body-dathang').hide();

$('#dangban-conhan').on('click', function() {
    $('#title-dangban-conhan').show();
    $('#body-dangban-conhan').show();
    $('#title-dathich').hide();
    $('#body-dathich').hide();
    $('#title-damua').hide();
    $('#title-lichsu').hide();
    $('#title-top1').hide();
    $('#body-damua').hide();
    $('#body-lichsu').hide();
    $('#body-lichsu-chitiet').hide();
    $('#body-top1').hide();
    $('#title-dangdg').hide();
    $('#title-dathang').hide();
    $('#body-dangdg').hide();
    $('#body-dathang').hide();
    $('#dangban-list').empty();
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/dangban/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {

        var aaas = " {{#each this}}\
        <script>\
        var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
        var now1 = new Date().getTime();\
        var qwe = Math.floor(countDownDate{{ID}} - now1);\
        if(qwe < 0)\
        {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
        else {\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance{{ID}} = countDownDate{{ID}} - now;\
        var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
        var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
        document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
        } </script>\
        {{/each}}";
        //var source2 = $('#dest').html();
        var source = $('#dangban-template').html();
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(aaas);
        var html = template(data.sanpham);
        var html1 = template1(data.sanpham);
        $('#dangban-list').append(html);
        $('#timeaa').append(html1);
        $('#dangban-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');

        });
    });
});

function suamota(id) {
        $('#dangban-list').empty();
        $.ajax({
            url: 'http://localhost:3000/sanpham/'+id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source = $('#suamotasp').html();
            var template = Handlebars.compile(source);
            var html = template(data.sanpham);
            $('#dangban-list').append(html);

            $('#dangban-list div[style]').fadeIn(200, function() {
                $(this).removeAttr('style');
            });
        });
};

function updateMoTa(id) {
    var mt = $('#motamoi').val();
    $.ajax({
        url: 'http://localhost:3000/sanpham/update/'+id+'/'+mt,
        //dataType: 'json',
        //timeout: 10000
    }).done(function() {
        $('#dangban-list').empty();
        alert('Đã Sửa Đổi Mô Tả!')
        $.ajax({
            url: 'http://localhost:3000/sanpham/'+id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source = $('#suamotasp').html();
            var template = Handlebars.compile(source);
            var html = template(data.sanpham);
            $('#dangban-list').append(html);

            $('#dangban-list div[style]').fadeIn(200, function() {
                $(this).removeAttr('style');
            });
        });
    });
};

$('#damua').on('click', function() {
    $('#title-dangban-conhan').hide();
    $('#body-dangban-conhan').hide();
    $('#title-dathich').hide();
    $('#body-dathich').hide();
    $('#title-damua').show();
    $('#title-lichsu').hide();
    $('#title-top1').hide();
    $('#body-damua').show();
    $('#body-lichsu').hide();
    $('#body-lichsu-chitiet').hide();
    $('#body-top1').hide();
    $('#title-dangdg').hide();
    $('#title-dathang').hide();
    $('#body-dangdg').hide();
    $('#body-dathang').hide();
    $('#damua-list').empty();
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/damua/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {

        var aaas = " {{#each this}}\
        <script>\
        var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
        var now1 = new Date().getTime();\
        var qwe = Math.floor(countDownDate{{ID}} - now1);\
        if(qwe < 0)\
        {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
        else {\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance{{ID}} = countDownDate{{ID}} - now;\
        var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
        var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
        document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
        } </script>\
        {{/each}}";
        //var source2 = $('#dest').html();
        var source = $('#damua-template').html();
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(aaas);
        var html = template(data.sanpham);
        var html1 = template1(data.sanpham);
        $('#damua-list').append(html);
        $('#timeaa').append(html1);
        $('#damua-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');

        });
    });
});

$('#lsdg').on('click', function() {
    $('#title-dangban-conhan').hide();
    $('#body-dangban-conhan').hide();
    $('#title-dathich').hide();
    $('#body-dathich').hide();
    $('#title-damua').hide();
    $('#title-lichsu').show();
    $('#title-top1').hide();
    $('#body-damua').hide();
    $('#body-lichsu').show();
    $('#body-lichsu-chitiet').hide();
    $('#body-top1').hide();
    $('#title-dangdg').hide();
    $('#title-dathang').hide();
    $('#body-dangdg').hide();
    $('#body-dathang').hide();
    $('#lichsu-list').empty();
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/dangban/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {

        var aaas = " {{#each this}}\
        <script>\
        var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
        var now1 = new Date().getTime();\
        var qwe = Math.floor(countDownDate{{ID}} - now1);\
        if(qwe < 0)\
        {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
        else {\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance{{ID}} = countDownDate{{ID}} - now;\
        var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
        var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
        document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
        } </script>\
        {{/each}}";
        //var source2 = $('#dest').html();
        var source = $('#lichsu-template').html();
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(aaas);
        var html = template(data.sanpham);
        var html1 = template1(data.sanpham);
        $('#lichsu-list').append(html);
        $('#timeaa').append(html1);
        $('#lichsu-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');

        });
    });
});

function lichsu(id) {
    $('#title-dangban-conhan').hide();
    $('#body-dangban-conhan').hide();
    $('#title-dathich').hide();
    $('#body-dathich').hide();
    $('#title-damua').hide();
    $('#title-lichsu').show();
    $('#title-top1').hide();
    $('#body-damua').hide();
    $('#body-lichsu').hide();
    $('#body-lichsu-chitiet').show();
    $('#body-top1').hide();
    $('#title-dangdg').hide();
    $('#title-dathang').hide();
    $('#body-dangdg').hide();
    $('#body-dathang').hide();
    $('#lichsu2-list').empty();
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/lichsu/'+id,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        var source = $('#lichsu-chitiet-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.daugia);
        $('#lichsu2-list').append(html);
    });
};

function kichnguoimua(email) {
    var id = $('#idsp').val();
    $('#lichsu2-list').empty();
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/kick/'+id+'/'+email,
        //dataType: 'json',
        //timeout: 10000
    }).done(function(data) {
        alert('Đã Chặn Người Mua Không Cho Đấu Giá Sản Phẩm Này!')
        $.ajax({
            url: 'http://localhost:3000/qlsanphamnguoidung/lichsu/'+id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source = $('#lichsu-chitiet-template').html();
            var template = Handlebars.compile(source);
            var html = template(data.daugia);
            $('#lichsu2-list').append(html);
            $.ajax({
                url: 'http://localhost:3000/qlsanphamnguoidung/updateNguoiMua/'+id,
                //dataType: 'json',
                //timeout: 10000
            }).done(function(data) {
                alert('Đã Thay Người Giữ Giá Cho Sản Phẩm Này!')
            });
        });
    });
};

function congdiem() {
    var email = $('#emailCT').val();
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/congdiem/'+email,
        //dataType: 'json',
        //timeout: 10000
    }).done(function(data) {
        alert('Đã +1 Cho Người Mua Sản Phẩm Này!')
    });
};

function trudiem() {
    var email = $('#emailCT').val();
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/trudiem/'+email,
        //dataType: 'json',
        //timeout: 10000
    }).done(function(data) {
        alert('Đã -1 Cho Người Mua Sản Phẩm Này!')
    });
};


$('#spYeuThich').on('click', function() {
    $('#title-dangban-conhan').hide();
    $('#body-dangban-conhan').hide();
    $('#title-dathich').show();
    $('#body-dathich').show();
    $('#title-damua').hide();
    $('#title-lichsu').hide();
    $('#title-top1').hide();
    $('#body-damua').hide();
    $('#body-lichsu').hide();
    $('#body-lichsu-chitiet').hide();
    $('#body-top1').hide();
    $('#title-dangdg').hide();
    $('#title-dathang').hide();
    $('#body-dangdg').hide();
    $('#body-dathang').hide();
    $('#like-list').empty();
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/sanpham/dalike/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {

        var aaas = " {{#each this}}\
        <script>\
        var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
        var now1 = new Date().getTime();\
        var qwe = Math.floor(countDownDate{{ID}} - now1);\
        if(qwe < 0)\
        {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
        else {\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance{{ID}} = countDownDate{{ID}} - now;\
        var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
        var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
        document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
        } </script>\
        {{/each}}";
        //var source2 = $('#dest').html();
        var source = $('#like-template').html();
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(aaas);
        var html = template(data.sanpham);
        var html1 = template1(data.sanpham);
        $('#like-list').append(html);
        $('#timeaa').append(html1);
        $('#like-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');

        });

    });
});

$('#spDangDG').on('click', function() {
    $('#title-dangban-conhan').hide();
    $('#body-dangban-conhan').hide();
    $('#title-dathich').hide();
    $('#body-dathich').hide();
    $('#title-damua').hide();
    $('#title-lichsu').hide();
    $('#title-top1').hide();
    $('#body-damua').hide();
    $('#body-lichsu').hide();
    $('#body-lichsu-chitiet').hide();
    $('#body-top1').hide();
    $('#title-dangdg').show();
    $('#title-dathang').hide();
    $('#body-dangdg').show();
    $('#body-dathang').hide();
    $('#dangdg-list').empty();
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/dangdaugia/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {

        var aaas = " {{#each this}}\
        <script>\
        var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
        var now1 = new Date().getTime();\
        var qwe = Math.floor(countDownDate{{ID}} - now1);\
        if(qwe < 0)\
        {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
        else {\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance{{ID}} = countDownDate{{ID}} - now;\
        var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
        var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
        document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
        } </script>\
        {{/each}}";
        //var source2 = $('#dest').html();
        var source = $('#dangdg-template').html();
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(aaas);
        var html = template(data.sanpham);
        var html1 = template1(data.sanpham);
        $('#dangdg-list').append(html);
        $('#timeaa').append(html1);
        $('#dangdg-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');

        });

    });
});

function huythichsp(id) {
    var email = localStorage.getItem('email'); 
    $.ajax({
            url: 'http://localhost:3000/user/dislike/'+id+'/'+email,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            alert('Đã hủy thích');
            $('#like-list').empty();
            $.ajax({
                url: 'http://localhost:3000/sanpham/dalike/'+email,
                dataType: 'json',
                timeout: 10000
            }).done(function(data) {

                var aaas = " {{#each this}}\
                <script>\
                var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
                var now1 = new Date().getTime();\
                var qwe = Math.floor(countDownDate{{ID}} - now1);\
                if(qwe < 0)\
                {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
                else {\
                setInterval(function() {\
                var now = new Date().getTime();\
                var distance{{ID}} = countDownDate{{ID}} - now;\
                var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
                var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
                var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
                var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
                document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
                } </script>\
                {{/each}}";
                //var source2 = $('#dest').html();
                var source = $('#like-template').html();
                var template = Handlebars.compile(source);
                var template1 = Handlebars.compile(aaas);
                var html = template(data.sanpham);
                var html1 = template1(data.sanpham);
                $('#like-list').append(html);
                $('#timeaa').append(html1);
                $('#like-list div[style]').fadeIn(200, function() {
                    $(this).removeAttr('style');

                });

            });
        });
};
function huydg(id) {
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/kick/'+id+'/'+email,
        //dataType: 'json',
        //timeout: 10000
    }).done(function(data) {
        alert('Đã Hủy Đấu Giá Sản Phẩm Này!')
        $('#dangdg-list').empty();
        $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/dangdaugia/'+email,
        dataType: 'json',
        timeout: 10000
        }).done(function(data) {

            var aaas = " {{#each this}}\
            <script>\
            var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
            var now1 = new Date().getTime();\
            var qwe = Math.floor(countDownDate{{ID}} - now1);\
            if(qwe < 0)\
            {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
            else {\
            setInterval(function() {\
            var now = new Date().getTime();\
            var distance{{ID}} = countDownDate{{ID}} - now;\
            var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
            var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
            var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
            var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
            document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
            } </script>\
            {{/each}}";
            //var source2 = $('#dest').html();
            var source = $('#dangdg-template').html();
            var template = Handlebars.compile(source);
            var template1 = Handlebars.compile(aaas);
            var html = template(data.sanpham);
            var html1 = template1(data.sanpham);
            $('#dangdg-list').append(html);
            $('#timeaa').append(html1);
            $('#dangdg-list div[style]').fadeIn(200, function() {
                $(this).removeAttr('style');
            });
            $.ajax({
                url: 'http://localhost:3000/qlsanphamnguoidung/updateNguoiMua/'+id,
                //dataType: 'json',
                //timeout: 10000
            }).done(function(data) {
                alert('Đã Thay Người Giữ Giá Cho Sản Phẩm Này!')
            });
        });
    });
};

$('#spDaThang').on('click', function() {
    $('#title-dangban-conhan').hide();
    $('#body-dangban-conhan').hide();
    $('#title-dathich').hide();
    $('#body-dathich').hide();
    $('#title-damua').hide();
    $('#title-lichsu').hide();
    $('#title-top1').hide();
    $('#body-damua').hide();
    $('#body-lichsu').hide();
    $('#body-lichsu-chitiet').hide();
    $('#body-top1').hide();
    $('#title-dangdg').hide();
    $('#title-dathang').show();
    $('#body-dangdg').hide();
    $('#body-dathang').show();
    $('#dathang-list').empty();
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/qlsanphamnguoidung/dathang/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {

        var aaas = " {{#each this}}\
        <script>\
        var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
        var now1 = new Date().getTime();\
        var qwe = Math.floor(countDownDate{{ID}} - now1);\
        if(qwe < 0)\
        {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
        else {\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance{{ID}} = countDownDate{{ID}} - now;\
        var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
        var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
        document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
        } </script>\
        {{/each}}";
        //var source2 = $('#dest').html();
        var source = $('#dathang-template').html();
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(aaas);
        var html = template(data.sanpham);
        var html1 = template1(data.sanpham);
        $('#dathang-list').append(html);
        $('#timeaa').append(html1);
        $('#dathang-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');

        });

    });
});