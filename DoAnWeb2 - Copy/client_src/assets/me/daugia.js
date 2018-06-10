function daugia(id) {
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
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
            var source = $('#daugia').html();
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