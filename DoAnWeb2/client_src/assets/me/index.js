$(function() {
    var token = localStorage.getItem('id_token');
    $.ajax({
        url: 'http://localhost:3000/login/'+token,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res != "0")
        {   
             $('#khach').hide();
             $('#dangky').hide();
             $('#dangnhap').hide();
             //$('#thoat').show();
             $('#nguoidung').show();
             $('#upsanpham').show();
             var ten = res;
             $('#list1').append(ten);
        }
    
    }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
    });
});
$('#thoat').click(function () {
     //alert('clicked');
     localStorage.clear();
     window.location.href = "http://localhost:8080"; 
});
$('#upsanpham').hide();
$('#nguoidung').hide();
//$('#thoat').hide();
$('#backhome').hide();
var CUR_PAGE = 1;
$('#btnMore2').hide();
$('#btnMore3').hide();
$('#btnMore4').hide();
$('#btnMore5').hide();
$("#includeContent").load("index.html");

$(function() {
    HandlebarsIntl.registerWith(Handlebars);
    loadProducts();
    loadCate();
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
            $('#btnMore').hide();
        }

        $('.loader').hide();
    });
};

var loadCate = function() {
    
    $.ajax({
        url: 'http://localhost:3000/sanpham/cate',
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        var source = $('#loadCategory').html();
        var template = Handlebars.compile(source);
        var html = template(data.sanpham);
        $('#danhmuc-list').append(html);
    });
};

var modal = document.getElementById('login-pop');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}