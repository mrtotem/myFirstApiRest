// colocar este script por fuera de node_modules, junto al archivo package.json y ejecutar npm install mongoose --save, npm install body-parser --save y npm install express --save...

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var authenticator = require('./authenticator');
var operations = require('./UserController');

mongoose.connect(config.database, function(err){
	console.log(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTE PARA EL API
// =============================================================================
var router = express.Router();

router.use(function(req, res, next){
	console.log('Something is happening.');
	next();
});

router.route('/users')
	.post(operations.registerUser)
	.get(authenticator.ensureAuthenticated, operations.getUsers);

router.route('/users/login')
	.post(operations.login);

router.route('/users/:_userId')
	.get(authenticator.ensureAuthenticated, operations.findUserById)
	.put(authenticator.ensureAuthenticated, operations.updateUser)
	.delete(authenticator.ensureAuthenticated, operations.deleteUser); // <-- only for admin..

router.route('/users/:_userId/arrived')
	.post(authenticator.ensureAuthenticated, operations.onUserArrived);

router.route('/users/:_userId/alerts')
	.post(authenticator.ensureAuthenticated, operations.onUserAlerted)
	.get(authenticator.ensureAuthenticated, operations.getUserAlerts);

	router.route('/users/:_userId/alerts/:_alertId')
	.put(authenticator.ensureAuthenticated, operations.updateAlertMessage);

app.use('/api', router);

app.listen(process.env.PORT || 3000);

