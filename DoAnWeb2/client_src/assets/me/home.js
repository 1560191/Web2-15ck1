$('#home').on('click', function() {
    $('#btnMore').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
    var CUR_PAGE = 1;
    $('#btnMore2').show(); 
    $('#product-list').empty();
    $(function() {
        HandlebarsIntl.registerWith(Handlebars);
        loadHome();
    });
    $('#btnMore2').on('click', function() {
        loadHome();
    });

    var loadHome = function() {
        $('.loader').show();

        $.ajax({
            url: 'http://localhost:3000/sanpham?page=' + CUR_PAGE,
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

            $('#product-list div[style]').fadeIn(200, function() {
                $(this).removeAttr('style');
            });

            CUR_PAGE++;
            if (data.hasMore === false) {
                $('#btnMore2').hide();
            }

            $('.loader').hide();
        });
    };
});


$('#nhieunhat').on('click', function() {
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
    $('#product-list').empty();
    $('.loader').show();
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5ragia?page=1',
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

        $('#product-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });
        $('#product-list').show();
        $('.loader').hide();
    });
});


$('#caonhat').on('click', function() {
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
    $('#product-list').empty();
    $('.loader').show();
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5giacao?page=1',
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

        $('#product-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });
        $('#product-list').show();

        $('.loader').hide();
    });
});


$('#ketthuc').on('click', function() {
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore3').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
    $('#product-list').empty();
    $('.loader').show();
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5ketthuc?page=1',
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

        $('#product-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });
        $('#product-list').show();

        $('.loader').hide();
    });
});


$('#btnSearch').on('click', function() {
    $('#btnMore').hide();
    $('#btnMore2').hide();
    $('#btnMore4').hide();
    $('#btnMore5').hide();
    var CUR_PAGE = 1;
    $('#btnMore3').show();
    $('#product-list').empty();
    var timkiem = $('#search').val();
    $(function() {
        HandlebarsIntl.registerWith(Handlebars);
        loadSearch();
    });
    $('#btnMore3').on('click', function() {
        loadSearch();
    });

    var loadSearch = function() {
        $('.loader').show();

        $.ajax({
            url: 'http://localhost:3000/sanpham/timkiem/' +timkiem+'?page=' +CUR_PAGE,
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

            $('#product-list div[style]').fadeIn(200, function() {
                $(this).removeAttr('style');
            });

            CUR_PAGE++;
            if (data.hasMore === false) {
                $('#btnMore3').hide();
            }

            $('.loader').hide();
        });
    };
});