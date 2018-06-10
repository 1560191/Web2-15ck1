var express = require('express');
var mail = require('../repos/mail');
var nodemailer = require('nodemailer');
var router = express.Router();

router.get('/:email', (req, res) => {
	if (req.params.email) {
		var email = req.params.email;
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: 'daugiaonlineH@gmail.com',
            pass: 'huynhconghau'
        }
    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'daugiaonlineH@gmail.com', // Địa chỉ email của người gửi
        to: email, // Địa chỉ email của người gửi
        subject: 'Chào Bạn đến với sàn đấu giá online ', // Tiêu đề mail
        text: 'Mời bạn click vào liên kết này để xác minh gmail http://localhost:8080/active.html?mail='+ email, // Nội dung mail dạng text
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/');
        }
    });
		
	} else {
		res.statusCode = 400;
		res.json('error');
	}
});
router.post('/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
        mail.update(email);
        console.log('ok');
        
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});


module.exports = router;

