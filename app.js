// colocar este script por fuera de node_modules, junto al archivo package.json y ejecutar npm install mongoose --save, npm install body-parser --save y npm install express --save...

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');

var operations = require('./node_modules/scripts/UserController');

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
	.get(operations.getUsers);

router.route('/users/login')
	.post(operations.login);

router.route('/users/:_id')
	.get(operations.findUserById)
	.put(operations.updateUser)
	.delete(operations.deleteUser);

app.use('/api', router);

app.listen(process.env.PORT || 3000);

