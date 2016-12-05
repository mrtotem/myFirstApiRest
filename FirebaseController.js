var FCM = require('fcm-push');

var serverKey = '';
var fcm = new FCM(serverKey);

var arrivedMessage = {

    to: 'registration_token_or_topics', // required fill with device token or topics
    collapse_key: 'your_collapse_key', 
    data: {
        your_custom_data_key: 'your_custom_data_value'
    },

    notification: {
        title: 'Mensage de llegada!',
        body: 'Este es un mensaje de llegada'
    }
};

var alertMessage = {

    to: 'registration_token_or_topics', // required fill with device token or topics
    collapse_key: 'your_collapse_key', 
    data: {
        your_custom_data_key: 'your_custom_data_value'
    },

    notification: {
        title: 'Mensage de alerta!',
        body: 'Este es un mensaje de alerta'
    }
};

var dangerMessage = {

    to: 'registration_token_or_topics', // required fill with device token or topics
    collapse_key: 'your_collapse_key', 
    data: {
        your_custom_data_key: 'your_custom_data_value'
    },

    notification: {
        title: 'Mensage de peligro!',
        body: 'Este es un mensaje de peligro'
    }
};

module.exports.sendArrivedPush = function(req, res){

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