function addDM() {
	var dm = $('#danhmuc').val();
    $.ajax({
        url: 'http://localhost:3000/danhmuc/add/'+dm,
        //dataType: 'json',
        //timeout: 10000
    }).done(function() {
        alert('Đã Thêm Danh Mục!')
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
    });
}


function updateDM(id) {
    //var id = $('#IDdanhmuc').val();
    var dmMoi = $('#dmMoi').val();
    $.ajax({
        url: 'http://localhost:3000/danhmuc/update/'+dmMoi+'/'+id,
        //dataType: 'json', 
        //timeout: 10000
    }).done(function() {
        alert('Thay Đổi Tên Danh Mục Thành Công!')
        $.ajax({
            url: 'http://localhost:3000/danhmuc',
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var source0 = $('#noidung-temp-updateDM').html();
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
                '<td>' +
                '<center><a href="javascript:updateDM('+item.IDdanhmuc+');"><span class="glyphicon glyphicon-ok"></span> Thay Đổi </a></center>' +
                '</td>' +
            '</tr>';
            
            $('#listupdateDM').append(tr);
            });
        });
    });
};

function delDM(id) {
    $.ajax({
        url: 'http://localhost:3000/danhmuc/del/'+id,
        //dataType: 'json', 
        type: 'DELETE' 
        //timeout: 10000
    }).done(function() {
        alert('Xóa Danh Mục Thành Công!')
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
    });
};