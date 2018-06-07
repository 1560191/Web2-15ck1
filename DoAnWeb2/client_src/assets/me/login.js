$(function() {
  
    $('#txtPassword').select();
    $('#txtEmail').select();
   
});

$('#btnlogin').on('click', function () {
     //alert('clicked');
     var _PASSS = $('#txtPassword').val();
     var _mail = $('#txtEmail').val();
     var body = {
    "email":_mail,
    "password":_PASSS
};

     $.ajax({
        url: 'http://localhost:3000/login',
        dataType: 'json',
        timeout: 10000,

        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(body)
    }).done(function(rows) {
        console.log(rows);
        alert('Added');
    }).fail(function(xhr, textStatus, error) {
        console.log("loi");
    });
  
    
});