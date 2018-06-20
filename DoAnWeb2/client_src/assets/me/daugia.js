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
            $('#daugiauser').show();
            $('#hienthisp1').hide();
            $('#product-list').append(html);
            $('#product-list div[style]').fadeIn(200, function() {
                $(this).removeAttr('style');
            });
            //$('#product-list').show();
            $('.loader').hide();
            var mangbb = data.sanpham;
            var ctsp =  '<p>'+ mangbb[0].Mota + '</p>';
        
            $('#ctsp').append(ctsp);
        });
    }
    $(function(){
        $.ajax({
            url: 'http://localhost:3000/sanpham/daugiakq/'+id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            var manga = data.sanpham;
            var dem = 0;
             $.each(manga, function(idx, item) {
                dem = dem + 1 ;
                var mail = item.Email;
                var mail1 = mail.substr(0,3);
                var mail2 = mail1 + '***********@gmail.com'
                // var substr(item.Email, 0,3);
                // var tenemail = substr + '****************';
            var tr =  '<TR>'+
        '<TD align = "center" valign = "top">' +dem+ '</TD>'+
        '<TD align = "center" valign = "middle">' +mail2+ '</TD>'+
        '<TD align = "center" valign = "middle">' +item.Gia+ 'đ </TD>'+
        '</TR>';
            $('#list3').append(tr);
            });
        });
    });
};
function thich(id) {
    var emaila = localStorage.getItem('email'); 
    var _id = id;
    if(emaila == null)
    {
        alert('Bạn chưa đăng nhập!');
        return;
    }
    else
    {
        $.ajax({
            url: 'http://localhost:3000/user/like/'+_id+'/'+emaila,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            if(data == 1)
            {
            alert('Đã thêm sản phẩm vào danh sách yêu thích của bạn');
            }
            else
            {
            var r = confirm("Bạn đã thích sản phẩm này rồi! bạn muốn hủy thích chứ!");
            if (r == true) {
            $.ajax({
            url: 'http://localhost:3000/user/dislike/'+_id+'/'+emaila,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            alert('Đã hủy thích');
            

        });
            } else {
            return;
                } 
            }
        });
        }
    };
$(function() {
    $('#bidValue').select();
});  
function ragia(id) {
    var emaila = localStorage.getItem('email'); 
    var _id = id;
    var gia = $('#bidValue').val();
    if(emaila == null)
    {
        alert('Bạn chưa đăng nhập!');
        return;
    }
    else
    {   $.ajax({
            url: 'http://localhost:3000/sanpham/'+_id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
        var mang = data.sanpham;
        var countDownDate = new Date(mang[0].Thoigianketthuc).getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        if(distance < 0)
        {
            alert('Sản phẩm đã hết hạn đấu giá');
            return;
        }
        else{
            var qq = mang[0].Giahientai +  mang[0].Buocgia
            if(gia < qq)
            {
                alert('Bạn phải ra gia cao hơn hoặc bằng: ' + qq);
                    return;
            }
            else{
        $.ajax({
            url: 'http://localhost:3000/user/ragia/'+_id+'/'+emaila+'/'+gia,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            alert('Đã Đấu Giá Thành Công');
            daugia(_id);

        });
    }
}
          });
        }
    };  
function muangay(id) {
    var emaila = localStorage.getItem('email'); 
    var _id = id;
    if(emaila == null)
    {
        alert('Bạn chưa đăng nhập!');
        return;
    }
    else
    {   $.ajax({
            url: 'http://localhost:3000/sanpham/'+_id,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
        var mang = data.sanpham;
        var countDownDate = new Date(mang[0].Thoigianketthuc).getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        if(distance < 0)
        {
            alert('Sản phẩm đã hết hạn đấu giá!');
            return;
        }
        else{
          
            var r = confirm("Bạn có chắc chắn mua chứ!");
            if (r == true) {
            $.ajax({
            url: 'http://localhost:3000/sanpham/muangay/'+_id+'/'+emaila,
            dataType: 'json',
            timeout: 10000
        }).done(function(data) {
            alert('Đã Mua thành công! mời bạn đi tính tiền');
            window.location.href = "http://localhost:8080";

        });
            } else {
            return;
                }    
            }
          });
        }
    };  