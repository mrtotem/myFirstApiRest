var admin = require("firebase-admin");

module.exports = {
	
	'SECRET_TOKEN' : process.env.SECRET_TOKEN || 'token',
	'database' : 'mongodb://MrTotem:algaros1@ds113958.mlab.com:13958/mrtotemfirstapp'
};