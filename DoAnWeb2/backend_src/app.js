var express = require('express'),
	bodyParser = require('body-parser')
	morgan = require('morgan')
	cors = require('cors');
	request = require('request');
var sanphamCtrl = require('./apiControllers/sanphamController');
var userCtrl = require('./apiControllers/userController');
var mailCtrl = require('./apiControllers/mailController');
var loginCtrl = require('./apiControllers/loginController');
var capchaCtrl = require('./apiControllers/capchaController');
var danhmucCtrl = require('./apiControllers/danhmucController');
var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
	// res.end('hello from nodejs');
	var ret = {
		msg: 'hello from nodejs api'
	};
	res.json(ret);
});

app.use('/sanpham', sanphamCtrl);
app.use('/user', userCtrl);
// app.use('/products', productCtrl);
app.use('/mail',mailCtrl);
app.use('/login',loginCtrl);
app.use('/capcha', capchaCtrl);
app.use('/danhmuc', danhmucCtrl);
app.listen(3000, () => {
	console.log('API running on port 3000');
});