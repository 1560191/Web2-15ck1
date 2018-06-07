var express = require('express'),
	bodyParser = require('body-parser')
	morgan = require('morgan')
	cors = require('cors');

var sanphamCtrl = require('./apiControllers/sanphamController');
var userCtrl = require('./apiControllers/userController');
var mailCtrl = require('./apiControllers/mailController');
var loginCtrl = require('./apiControllers/loginController');
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
app.listen(3000, () => {
	console.log('API running on port 3000');
});