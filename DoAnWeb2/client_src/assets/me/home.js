$('#home').on('click', function() {
    var CUR_PAGE = 1;
    $('#btnMore').show(); 
    $('#product-list').empty();
    $(function() {
        HandlebarsIntl.registerWith(Handlebars);
        loadHome();
    });
    $('#btnMore').on('click', function() {
        loadHome();
    });

    var loadHome = function() {
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
});


$('#nhieunhat').on('click', function() {
    $('#product-list').empty();
    $('.loader').show();
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5ragia?page=1',
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
        $('#product-list').show();
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
});


$('#caonhat').on('click', function() {
    $('#product-list').empty();
    $('.loader').show();
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5giacao?page=1',
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
        $('#product-list').show();
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
});


$('#ketthuc').on('click', function() {
    $('#product-list').empty();
    $('.loader').show();
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5ketthuc?page=1',
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
        $('#product-list').show();
        if (data.hasMore === false) {
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
});