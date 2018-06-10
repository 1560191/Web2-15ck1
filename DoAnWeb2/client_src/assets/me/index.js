$(function() {
    var token = localStorage.getItem('id_token');
    $.ajax({
        url: 'http://localhost:3000/login/'+token,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res == "1")
        {   

             $('#dangky').hide();
             $('#dangnhap').hide();
             $('#thoat').show();
            
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