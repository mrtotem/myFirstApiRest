var FCM = require('fcm-push');
var config = require('./config');


var fcm = new FCM(config.PUSH_SERVER_KEY);

module.exports.sendArrivedPush = function(req, res){

    var arrivedMessage = {

        to: req.body.pushToken, // required fill with device token or topics
        collapse_key: 'your_collapse_key',
        notification: {
            title: 'Mensage de llegada!',
            body: 'Este es un mensaje de llegada'
        }
    };

	fcm.send(arrivedMessage, function(err, response){

	    if (err) {
	        console.log("Something has gone wrong!");
	    }else{
            console.log("Successfully sent with response: ", arrivedMessage);
        }
	});
}
	

module.exports.sendAlertPush = function(req, res){

    var alertMessage = {

        to: req.body.pushToken, // required fill with device token or topics
        collapse_key: 'your_collapse_key',
        notification: {
            title: 'Mensage de alerta!',
            body: 'Este es un mensaje de alerta'
        }
    };

	fcm.send(alertMessage, function(err, response){

	    if (err) {
            console.log("Something has gone wrong!");
        }else{
            console.log("Successfully sent with response: ", alertMessage);
        }
    });
}

module.exports.sendDangerPush = function(req, res){

    var dangerMessage = {

        to: req.body.pushToken, // required fill with device token or topics
        collapse_key: 'your_collapse_key',
        notification: {
            title: 'Mensage de peligro!',
            body: 'Este es un mensaje de peligro'
        }
    };


	fcm.send(dangerMessage, function(err, response){

	    if (err) {
            console.log("Something has gone wrong!");
        }else{
            console.log("Successfully sent with response: ", dangerMessage);
        }
    });
}