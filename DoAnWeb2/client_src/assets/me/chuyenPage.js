$('#dangnhap').on('click', function() {
    $('#footer').hide();
    $("#trangchu").load("login.html");
    $('#home').hide();
    $('#backhome').show();
});

$('#dangnhapngay').on('click', function() {
    $('#footer').hide();
    $("#trangchu").load("login.html");
    $('#home').hide();
    $('#backhome').show();
});

$('#dangky').on('click', function() {
    $('#footer').hide();
    $("#trangchu").load("register.html");
    $('#home').hide();
    $('#backhome').show();
});

$('#dangkyngay').on('click', function() {
    $('#footer').hide();
    $("#trangchu").load("register.html");
    $('#home').hide();
    $('#backhome').show();
});

$('#backhome').on('click', function() {
    window.location.href = "index.html";
    $('#home').show();
    
});