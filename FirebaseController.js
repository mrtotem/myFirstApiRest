var FCM = require('fcm-push');

var serverKey = 'AAAAH8KfAIY:APA91bENBod1lH6yfb9AWTz5yC7f2Lj1F07sws4dXiPKz1ziqa7mhKnviLdGtTI2jlEP3-2-J5k0jb4LAHbFjAJooNlJh1uQ9nurC16EMBQi7Mc8l0_orX-KyTDSB5YCiGcBNqkoT49OhfiqyikD-DnKR1XfNK0cdg';
var fcm = new FCM(serverKey);

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
	    }
	})
	.then(function(response){
        console.log("Successfully sent with response: ", arrivedMessage);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
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
	    }
	})
	.then(function(response){
        console.log("Successfully sent with response: ", alertMessage);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
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
	    }
	})
	.then(function(response){
        console.log("Successfully sent with response: ", dangerMessage);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
    });
}