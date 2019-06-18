var admin = require("firebase-admin");

var serviceAccount = require("/Users/user/wordsmaya_learning/firebase_cloud/fir-cloud-messaging-80c89-firebase-adminsdk-exily-1bcc01b959 (1).json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-cloud-messaging-80c89.firebaseio.com"
});


var registrationToken = "d704dHgpeRc:APA91bHBbXK-mgzdxr9hKyKfB9320kFTjSD5m43VRaplRyeoQWeITeqcfGvFbrS_f-rKuFOb61gIazQbBl6Vol9TklfjrXFTJaiDAINiexogObx0ZeR2dVIm9hcAym3ngDGVLPu1-3h7";

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