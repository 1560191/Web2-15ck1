$('#btnlogin').on('click', function () {
     //alert('clicked');
     var _PASSS = $('#txtPassword').val();
     var _mail = $('#txtEmail').val();
    if (_mail == "") {
        alert("Tên đăng nhập không được để trống");
        return false;
    }
    if (_PASSS == "") {
        alert("Mật khẩu không được để trống");
        return false;
    }
    $.ajax({
        url: 'http://localhost:3000/login/'+_mail+'/'+_PASSS,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res == "1")
        {
            alert('Đăng Nhập Thành Công!');
            return dieuhuong();
        }
        else if(res == "0")
        {
            alert('Sai Tên Đăng Nhập Hoặc Mật Khẩu!');
            return false;
        }
    });
    function dieuhuong(){
        window.location.href = "index.html"; 
    }
});