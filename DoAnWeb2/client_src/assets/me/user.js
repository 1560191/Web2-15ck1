function myFunction(){
  window.location.href = "/user.html";  
}

$('#upsanpham').on('click', function() {
    $("#trangchu").load("banSanPham.html");
});
$(function() {
    var token = localStorage.getItem('id_token'); 
    $.ajax({
        url: 'http://localhost:3000/login/'+token,
        dataType: 'text',
        timeout: 10000
    }).done(function(res) {
        if(res != "0")
        {    
            var obj = JSON.parse(res);  
             var ten = obj.Ten;
             var pq = obj.Permission;
             var emaila = obj.Email;
             $('#list1').append(ten);
             if(pq == '2')
             {
              $('#upsanpham').show();
              $('#xinban').hide();
               $.ajax({
        url: 'http://localhost:3000/user/kiemtra/'+emaila,
        dataType: 'text',
        timeout: 10000 
    }).done(function(data){
                var aaas = "<script>\
        var countDownDate = new Date('{{thoigianketthuc}}').getTime();\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance = countDownDate - now;\
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));\
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);\
        document.getElementById('nguoidung').innerHTML ='Bạn đã được duyệt bán hàng! Thời gian còn lại của bạn: ' + days + ' Ngày ' + hours + ' Giờ '+ minutes + ' Phút ' + seconds + ' Giây'; },1000);\
        </script>";
         var obj1 = JSON.parse(data);
        console.log(obj1);
        var template1 = Handlebars.compile(aaas);
        var html1 = template1(obj1[0]);
        $('#timeaaa').append(html1);
        });
             }
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
$(function() {
    HandlebarsIntl.registerWith(Handlebars);
    loadProducts();
    loadCate();
});

$('#dybanhang').on('click', function() {
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/user/xinbanhang/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        if(data == '1')
        {
        alert('Xin bán thành công! chờ admin kiểm tra!');
        window.location.href = "/user.html"; 
        }
        else
        {
            if(data == '2')
            {
        alert('Bạn đã xin rồi! chờ admin kiểm tra!');
        window.location.href = "/user.html"; 
            }
        }

    });
});

var loadProducts = function() {
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/sanpham/dalike/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {

        var aaas = " {{#each this}}\
        <script>\
        var countDownDate{{ID}} = new Date('{{Thoigianketthuc}}').getTime();\
        var now1 = new Date().getTime();\
        var qwe = Math.floor(countDownDate{{ID}} - now1);\
        if(qwe < 0)\
        {document.getElementById({{ID}}).innerHTML ='Hết thời gian đấu giá'}\
        else {\
        setInterval(function() {\
        var now = new Date().getTime();\
        var distance{{ID}} = countDownDate{{ID}} - now;\
        var days{{ID}} = Math.floor(distance{{ID}} / (1000 * 60 * 60 * 24));\
        var hours{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));\
        var minutes{{ID}} = Math.floor((distance{{ID}} % (1000 * 60 * 60)) / (1000 * 60));\
        var seconds{{ID}} = Math.floor((distance{{ID}} % (1000 * 60)) / 1000);\
        document.getElementById({{ID}}).innerHTML ='Thời gian còn lại: ' + days{{ID}} + 'Ngày ' + hours{{ID}} + 'Giờ'+ minutes{{ID}} + 'Phút' + seconds{{ID}} + 'Giây'; },1000);\
        } </script>\
        {{/each}}";
        //var source2 = $('#dest').html();
        var source = $('#like-template').html();
        var template = Handlebars.compile(source);
        var template1 = Handlebars.compile(aaas);
        var html = template(data.sanpham);
        var html1 = template1(data.sanpham);
        $('#like-list').append(html);
        $('#timeaa').append(html1);
        $('#like-list div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');

        });

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

var modal = document.getElementById('banhang-pop');
var modal2 = document.getElementById('ctsp-pop');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}