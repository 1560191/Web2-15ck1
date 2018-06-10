$('#gia').on('click', function() {
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore5').hide();
    var CUR_PAGE3 = 1;
    $('#btnMore4').show(); 
    $('#product-list').empty();
    $(function() {
        HandlebarsIntl.registerWith(Handlebars);
        loadHome();
    });
    $('#btnMore4').on('click', function() {
        loadHome();
    });

    var loadHome = function() {
        $('.loader').show();

        $.ajax({
            url: 'http://localhost:3000/sanpham/sapxepgia?page=' + CUR_PAGE3,
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

            CUR_PAGE3++;
            if (data.hasMore === false) {
                $('#btnMore4').hide();
            }

            $('.loader').hide();
        });
    };
});


$('#thoigian').on('click', function() {
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    var CUR_PAGE4 = 1;
    $('#btnMore5').show(); 
    $('#product-list').empty();
    $(function() {
        HandlebarsIntl.registerWith(Handlebars);
        loadHome();
    });
    $('#btnMore5').on('click', function() {
        loadHome();
    });

    var loadHome = function() {
        $('.loader').show();

        $.ajax({
            url: 'http://localhost:3000/sanpham/sapxepngay?page=' + CUR_PAGE4,
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

            CUR_PAGE4++;
            if (data.hasMore === false) {
                $('#btnMore5').hide();
            }

            $('.loader').hide();
        });
    };
});

