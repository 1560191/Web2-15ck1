$('#btnLoadAll').on('click', function() {
    // alert('clicked');

    $.ajax({
        url: 'http://localhost:3000/sanpham',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        // console.log(data);
        // alert('done');

        $.each(data, function(idx, item) {
            // console.log(item.CatName);
            var tr = '<tr>' +
                '<td>' +
                item.CatID +
                '</td>' +
                '<td>' +
                item.CatName +
                '</td>' +
                '<td>&nbsp;</td>' +
            '</tr>';
            $('#list').append(tr);
        });
    });
});