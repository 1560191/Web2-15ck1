function chapnhan(email) {
    $.ajax({
        url: 'http://localhost:3000/user/updateActiveXinBan/'+email,
        //dataType: 'json', 
        //timeout: 10000
    }).done(function() {
        alert('Đã Duyệt Đơn Xin Bán Hàng!')
        $.ajax({
            url: 'http://localhost:3000/user/dsxinban/loadAll',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-duyet').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td>' +
                item.Email +
                '</td>' +
                '<td><center>' +
                item.Diemdanhgia +
                '</center></td>' +
                '<td>' +
                '<center><a href="javascript:chapnhan();"><span class="glyphicon glyphicon-ok"></span> Chấp Nhận </a></center>' +
                '</td>' +
                '<td>' +
                '<center><a href="javascript:tuchoi();" style="color:red;"><span class="glyphicon glyphicon-remove" style="color:red;"></span> Từ Chối </a></center>' +
                '</td>' +
                '<input type="hidden" value="'+item.Email+'" id="emailDuyet">' +
            '</tr>';
            
            $('#listduyet').append(tr);
            });
        });
    });
};

function tuchoi(email) {
    $.ajax({
        url: 'http://localhost:3000/user/delXinBan/'+email,
        //dataType: 'json', 
        //timeout: 10000
    }).done(function() {
        alert('Đã Từ Chối Đơn Xin Bán Hàng!')
        $.ajax({
            url: 'http://localhost:3000/user/dsxinban/loadAll',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-duyet').html();
            var template0 = Handlebars.compile(source0);
            $('#noidung').html(template0());
            $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td>' +
                item.Email +
                '</td>' +
                '<td><center>' +
                item.Diemdanhgia +
                '</center></td>' +
                '<td>' +
                '<center><a href="javascript:chapnhan();"><span class="glyphicon glyphicon-ok"></span> Chấp Nhận </a></center>' +
                '</td>' +
                '<td>' +
                '<center><a href="javascript:tuchoi();" style="color:red;"><span class="glyphicon glyphicon-remove" style="color:red;"></span> Từ Chối </a></center>' +
                '</td>' +
                '<input type="hidden" value="'+item.Email+'" id="emailDuyet">' +
            '</tr>';
            
            $('#listduyet').append(tr);
            });
        });
    });
};