// colocar este script por fuera de node_modules, junto al archivo package.json y ejecutar npm install mongoose --save, npm install body-parser --save y npm install express --save...

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

// Authentication
var authenticator = require('./authenticator');

// Controllers
var operations = require('./UserController');
var messageController = require('./MessageController');
var pushController = require('./FirebaseController');

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

// User
router.route('/users')
	.post(operations.registerUser)
	.get(authenticator.ensureAuthenticated, operations.getUsers);

router.route('/users/login')
	.post(operations.login);

router.route('/users/:_userId')
	.get(authenticator.ensureAuthenticated, operations.findUserById)
	.put(authenticator.ensureAuthenticated, operations.updateUser)
	.delete(operations.deleteUser); // <-- only for admin..

router.route('/users/cleandb')
	.post(operations.cleanDB);

// Arrivals
router.route('/users/:_userId/arrivals')
	.post(authenticator.ensureAuthenticated, messageController.onUserArrived, pushController.sendArrivedPush);

router.route('/arrivals/:email')
	.get(authenticator.ensureAuthenticated, messageController.getUserArrivals);

router.route('/users/:_userId/arrivals/:_arrivedId')
	.delete(messageController.deleteArrived);

router.route('/arrivals/cleandb')
	.post(messageController.cleanArrivalsDB);
	
// Alerts
router.route('/users/:_userId/alerts')
	.post(authenticator.ensureAuthenticated, messageController.onUserAlerted, pushController.sendAlertPush)

router.route('/alerts/:email')
	.get(authenticator.ensureAuthenticated, messageController.getUserAlerts);

router.route('/users/:_userId/alerts/:_alertId')
	.put(authenticator.ensureAuthenticated, messageController.updateAlertMessage)
	.delete(messageController.deleteAlert);

router.route('/alerts/cleandb')
	.post(messageController.cleanAlertsDB);

// Dangers
router.route('/users/:_userId/dangers')
	.post(authenticator.ensureAuthenticated, messageController.onUserDanger, pushController.sendDangerPush)

router.route('/dangers/:email')
	.get(authenticator.ensureAuthenticated, messageController.getUserDangers);

router.route('/users/:_userId/dangers/:_dangerId')
	.put(authenticator.ensureAuthenticated, messageController.updateDangersMessage)
	.delete(messageController.deleteDanger);

router.route('/dangers/cleandb')
	.post(messageController.cleanDangersDB);

app.use('/api', router);

app.listen(process.env.PORT || 3000);

