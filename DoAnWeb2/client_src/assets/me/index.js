
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
             $('#thoat').show();
              var obj = JSON.parse(res);  
             var ten = obj.Ten;
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
$('#thoat').hide();
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

        var aaas = " {{#each this}}\
        <script>\
        var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance{{ID}} = countDownDate{{ID}} - now;\
        var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
        var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
        document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
        </script>\
        {{/each}}";
        //var source2 = $('#dest').html();
        var source = $('#product-template').html();
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(aaas);
        var html = template(data.sanpham);
        var html1 = template1(data.sanpham);
        $('#product-list').append(html);
        $('#timeaa').append(html1);
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
var modal2 = document.getElementById('ctsp-pop');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}