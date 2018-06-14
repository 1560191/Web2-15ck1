$(function() {
    var token = localStorage.getItem('id_token');
    $.ajax({
        url: 'http://localhost:3000/admin/'+token,
        dataType: 'text',
        timeout: 10000,
    }).done(function(res) {
        if(res != "0")
        {   
             
             $('#dangnhapadmin').hide();
             $('#out').show();
             var ten = res;
             $('#usadmin').append(ten);
        }
    
    }).fail(function(xhr, textStatus, error) {
            console.log(error);
            console.log(xhr);
    });
});
$('#out').click(function () {
     //alert('clicked');
     localStorage.clear();
     window.location.href = "http://localhost:8080/admin.html"; 
});
$('#out').hide();
