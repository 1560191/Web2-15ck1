$('#btnlogin').on('click', function () {
     //alert('clicked');
     var _PASSS = $('#txtPassword').val();
     var _mail = $('#txtEmail').val();
    if (_mail == "") {
        alert("Tên đăng nhập không được để trống");
        return dieuhuong();
    }
    if (_PASSS == "") {
        alert("Mật khẩu không được để trống");
        return dieuhuong();
    }
    $.ajax({
        url: 'http://localhost:3000/login/'+_mail+'/'+_PASSS,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res == "0")
        {
            alert('Sai Tên Đăng Nhập Hoặc Mật Khẩu!');
            return dieuhuong();
        }
        else
       
        {   if(res == "1")
            {
            alert('Bạn Chưa xác thực tài khoản! Vui lòng vào Email của bạn xác nhận!');
            }
            else
            {
            alert('Đăng Nhập Thành Công!');
            localStorage.setItem('id_token', res); 
            return dieuhuong();
            }
        }
    
    }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
    });
    function dieuhuong(){
        window.location.href = "http://localhost:8080"; 
    }
});