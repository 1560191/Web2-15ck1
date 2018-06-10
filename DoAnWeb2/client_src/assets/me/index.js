var CUR_PAGE = 1;
$('#btnMore2').hide();
$('#btnMore3').hide();
$('#btnMore4').hide();
$('#btnMore5').hide();
$("#includeContent").load("index.html");
$(function() {
    HandlebarsIntl.registerWith(Handlebars);
    loadProducts();
});

$('#btnMore').on('click', function() {
    loadProducts();
});

var loadProducts = function() {
    $('.loader').show();

    $.ajax({
        url: 'http://localhost:3000/sanpham?page=' + CUR_PAGE,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var html = template(data.sanpham);
        $('#product-list').append(html);

        $('#product-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });

        CUR_PAGE++;
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
};