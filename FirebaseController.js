var FCM = require('fcm-push');
var config = require('./config');
var user = require('./node_modules/scripts/models/User');

var fcm = new FCM('AAAAH8KfAIY:APA91bENBod1lH6yfb9AWTz5yC7f2Lj1F07sws4dXiPKz1ziqa7mhKnviLdGtTI2jlEP3-2-J5k0jb4LAHbFjAJooNlJh1uQ9nurC16EMBQi7Mc8l0_orX-KyTDSB5YCiGcBNqkoT49OhfiqyikD-DnKR1XfNK0cdg');

module.exports.sendArrivedPush = function(req, res){

    console.log("EMAIL SENDED " + req.body.email);

    user.findOne({email: req.body.email}, function(err, userTemp){

            if(err)
                return res.status(400).send(err);

            console.log("USER FOUND " + userTemp);

            var arrivedMessage = {

                to: userTemp.pushToken, // required fill with device token or topics
                notification: {
                    title: 'Mensage de llegada!',
                    body: 'Este es un mensaje de llegada'
                }
            };

            console.log(arrivedMessage);
            
            fcm.send(arrivedMessage, function(err, response){

                if (err) {
                    console.log(err);
                    console.log("Something has gone wrong!");
                }else{
                    console.log("Successfully sent with response: ", arrivedMessage);
                }
            });
    });
}
	

module.exports.sendAlertPush = function(req, res){

    console.log("EMAIL SENDED " + req.body.email);

    user.findOne({email: req.body.email}, function(err, userTemp){

            if(err)
                return res.status(400).send(err);

            console.log("USER FOUND " + userTemp);

            var alertMessage = {

                to: userTemp.pushToken, // required fill with device token or topics
                    notification: {
                    title: 'Mensage de alerta!',
                    body: 'Este es un mensaje de alerta'
                }
            };

            console.log(alertMessage);
            
            fcm.send(alertMessage, function(err, response){

                if (err) {
                    console.log(err);
                    console.log("Something has gone wrong!");
                }else{
                    console.log("Successfully sent with response: ", alertMessage);
                }
            });
    });
}

module.exports.sendDangerPush = function(req, res){


    console.log("EMAIL SENDED " + req.body.email);

    user.findOne({email: req.body.email}, function(err, userTemp){

            if(err)
                return res.status(400).send(err);

            console.log("USER FOUND " + userTemp);

            var dangerMessage = {

                to: userTemp.pushToken, // required fill with device token or topics
                    notification: {
                    title: 'Mensage de peligro!',
                    body: 'Este es un mensaje de peligro'
                }
            };

            console.log(dangerMessage);
            
            fcm.send(dangerMessage, function(err, response){

                if (err) {
                    console.log(err);
                    console.log("Something has gone wrong!");
                }else{
                    console.log("Successfully sent with response: ", dangerMessage);
                }
            });
    });
}