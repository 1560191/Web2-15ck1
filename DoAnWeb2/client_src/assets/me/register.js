$(function () {

    $('.datepicker').datepicker({
        autoclose: true,
        format: 'd/m/yyyy',
        startDate: '-3d'
    });

    $.validator.addMethod("vndate", function (value, element) {
        return this.optional(element) || /^\d\d?\/\d\d?\/\d\d\d\d$/.test(value);
    });

    $('#registerForm').validate({
        rules: {
            UID: {
                required: true
            },
            PWD: {
                required: true,
                minlength: 6
            },
            ConfirmPWD: {
                required: true,
                equalTo: $('#txtPassword')
            },
            FullName: {
                required: true,
            },
            Phone: {
                required: true,
                maxlength: 11
            },
            address: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },
        },
        messages: {
            UID: {
                required: 'Please input UID'
            },
            PWD: {
                required: "Chưa nhập mật khẩu.",
                minlength: "Mật khẩu phải nhiều hơn 6 ký tự."
            },
            ConfirmPWD: {
                required: "Chưa nhập lại mật khẩu.",
                equalTo: "Mật khẩu nhập lại không khớp."
            },
            address: {
                required: "Chưa nhập địa chỉ",
            },
            Phone: {
                required: "Chưa nhập số điện thoại",
                maxlength: "Số điện thoại phải nhỏ hơn 11 số"
            },
            FullName: {
                required: "Chưa nhập họ tên.",
            },
            Email: {
                required: "Chưa nhập email.",
                email: "Email không đúng định dạng."
            },
        },

        highlight: function (element) { // hightlight error inputs
            $(element)
                .closest('.form-group')
                .addClass('has-error'); // set error class to the control group
        },

        success: function (label) {
            // var name = label.attr('for');
            // $('[name=' + name + ']').closest('.form-group').removeClass('has-error');

            label.closest('.form-group').removeClass('has-error');
            label.remove();
        },

        errorElement: 'span',
        errorClass: 'help-block'
    });

    $('#txtUserName').select();
});

$(function() {
    $('#txtPhone').select();
    $('#txtPassword').select();
    $('#txtEmail').select();
    $('#txtName').select();
    $('#txtaddress').select();
});

$('#btnRegister').on('click', function () {
     //alert('clicked');
     var _PASSS = $('#txtPassword').val();
     var _mail = $('#txtEmail').val();
     var _fullname = $('#txtName').val();
     var _Phone = $('#txtPhone').val();
     var _addresss = $('#txtaddress').val();
     var body = {
        Diachi: _addresss,
        SDT: _Phone,
        Password: _PASSS,
        Name: _fullname,
        Email: _mail,

    };
    if(_Phone.length < 1 || _PASSS.length < 1 || _mail.length < 1 || _fullname.length < 1 || _addresss.length < 1)
    {
        return;
    }
    $.ajax({
        url: 'http://localhost:3000/user/'+ _mail,
        dataType: 'json', 
        timeout: 10000
    }).done(function(data) {
         if(data != null)
         {
            alert('email da ton tai')
         }
         else
         {
        $.ajax({
        url: 'http://localhost:3000/user',
        dataType: 'json',
        timeout: 10000,

        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done(function(data) {
        $.ajax({
        url: 'http://localhost:3000/mail/'+ _mail,
        dataType: 'json', 
        timeout: 10000,
    });
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
         }
    }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
        });
});

// $('#btnRegister').on('click', function () {
//     // alert('register');

//      var _Name = $('#txtUserName').val();
//      var _PASSS = $('#txtPassword').val();
//      var _mail = $('#txtEmail').val();
//      var _fullname = $('#txtName').val();
//      var _Phone = $('#txtPhone').val();
//      var _addresss = $('#txtaddress').val();

//     var body = {
//         Diachi: _addresss,
//         SDT: _Phone,
//         Password: _PASSS,
//         Name: _fullname,
//         Email: _mail,

//     };
//     $.ajax({
//         url: 'http://localhost:3000/users',
//         dataType: 'json',
//         timeout: 10000,

//         type: 'POST',
//         contentType: 'application/json',
//         data: JSON.stringify(body)
//     }).done(function(data) {
//          console.log(data);
//         alert('Added');
//     }).fail(function(xhr, textStatus, error) {
//         console.log(textStatus);
//         console.log(error);
//         console.log(xhr);
//     });
// });


