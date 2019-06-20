var admin = require("firebase-admin");

var serviceAccount = require("json key from firebase");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "<database here>"
});


var registrationToken = "<your registration token here>";

var payload = {
  notification: {
    title: "This is a Notification",
    body: "This is the body of the notification message.",
  }
};

var options = {
  priority: "high",
  timeToLive: 60 * 60 * 24
};


admin.messaging().sendToDevice(registrationToken, payload, options)
  .then(function (response) {
    console.log("Successfully sent message:", response);
  })
  .catch(function (error) {
    console.log("Error sending message:", error);
  });
