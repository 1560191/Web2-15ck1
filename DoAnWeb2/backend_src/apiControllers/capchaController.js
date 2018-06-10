var express = require('express');

var router = express.Router();


router.get('/:capcha',(req, res) => {

var capcha = req.params.capcha;
if(capcha === undefined || capcha === '' || capcha === null)
{
	return res.send("0");
}
	var secretKey = '6LdqOV4UAAAAAKF37UoKzM-zolPMx040Kd3tayfM';

	var verifyUrl = `https://google.com/recaptcha/api/api/siteverify?secret=${secretKey}$response=${req.body.capcha}$remoteip=${req.connection.remoteAddress}`;

	request(verifyUrl,(err,response,body)=>{
		if(body.success !== undefined && !body.success)
		{	
			return res.send("0");
		};
		return res.send("1");
		
	});
});
module.exports = router;