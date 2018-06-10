
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
$(document).ready(function() {
    var mail = getQueryVariable("mail");
    $.ajax({
        url: 'http://localhost:3000/mail/'+mail,
        dataType: 'json',
        timeout: 10000,
        type: 'POST',
        contentType: 'application/json',
    })
});