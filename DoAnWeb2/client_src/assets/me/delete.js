function deleteus() {
	var e = $('#e').val();
    $.ajax({
        url: 'http://localhost:3000/user/del/'+e,
        //dataType: 'json',
        type: 'DELETE' 
        //timeout: 10000
    }).done(function() {
        alert('Đã Xóa Tài Khoản!')
        $.ajax({
            url: 'http://localhost:3000/user',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-deluser').html();
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
                '<td>' +
                '<center><a href="javascript:deleteus();"><span class="glyphicon glyphicon-remove"></span> Xóa </a></center>' +
                '</td>' +
            '</tr>';
            
            $('#listdel').append(tr);
            });
        });
    });
};