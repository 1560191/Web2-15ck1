$(function() {
    // //$("#trangchu").load("qltk.html");
    // $("#home").hide();
    // $("#back").show();
    // $("#trangchu").hide();
    // $("#qltk").hide();
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/user/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        var source212 = $('#thongtinnguoidung').html();
        var template212 = Handlebars.compile(source212);
        var html212 = template212(data);
        $('#qltknd').append(html212);
        $('#qltknd div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');



        });
    });

});
$(function() {
    // //$("#trangchu").load("qltk.html");
    // $("#home").hide();
    // $("#back").show();
    // $("#trangchu").hide();
    // $("#qltk").hide();
    var email = localStorage.getItem('email'); 
    $.ajax({
        url: 'http://localhost:3000/user/'+email,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {

        var source2122 = $('#thongtinnguoidung1').html();
        var template2122 = Handlebars.compile(source2122);
        var html2122 = template2122(data);
        $('#qltknd1').append(html2122);
        $('#qltknd1 div[style]').fadeIn(200, function() {
            $(this).removeAttr('style');
        });
    });

});

$("#sbtnRsegister").on('click', function() {
    var _PASSS = $('#txtPassword').val();
    var _PASSS1 = $('#txtConfirmPWD').val();
    var email = localStorage.getItem('email');
    if(_PASSS != _PASSS1)
    {
        alert('Password và Confirm Password không giống nhau!');
          return false;
    }
    else
    {
    $.ajax({
        url: 'http://localhost:3000/user/thongtin/'+email+'/'+_PASSS,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        alert('Password của bạn đã cập nhật thành công!');
        window.location.href = "http://localhost:8080";

    });
    }

});
$("#dabtnRegister").on('click', function() {
     var _fullname = $('#txtName').val();
     var _Phone = $('#txtPhone').val();
     var _addresss = $('#txtaddress').val();
    var email = localStorage.getItem('email');

    $.ajax({
        url: 'http://localhost:3000/user/thongtin1/'+email+'/'+_fullname+'/'+_Phone+'/'+_addresss,
        dataType: 'json',
        timeout: 10000
    }).done(function(data) {
        alert('Bạn đã cập nhật thành công!');
        window.location.href = "/user.html";

    });

});
// $("#asbtnRsegister").on('click', function() {
//     // var _PASSS = $('#txtPassword').val();
//     // var _PASSS1 = $('#txtConfirmPWD').val();
//     // var email = localStorage.getItem('email');
//     console.log("ok"); 
//     alert('Password và Confirm Password không giống nhau!');
//     // if(_PASSS != _PASSS1)
//     // {
//     //     alert('Password và Confirm Password không giống nhau!');
//     //     return;
//     // }
//     // $.ajax({
//     //     url: 'http://localhost:3000/user/thongtin/'+email,
//     //     dataType: 'json',
//     //     timeout: 10000
//     // }).done(function(data) {
//     //     console.log(data.Hoten);
//     //     var source212 = $('#thongtinnguoidung').html();
//     //     var template212 = Handlebars.compile(source212);
//     //     var html212 = template212(data);
//     //     $('#qltknd').append(html212);
//     //     $('#qltknd div[style]').fadeIn(200, function() {
//     //         $(this).removeAttr('style');

//     //     });
//     // });

// });