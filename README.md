# firebase-cloud-messaging

# Aim :  To generate notifications from the custom backend server in node.js to the client app.

3 components - 

1.Firebase Console 
2.Android Studio (frontend for App)
3.Node.js (server-side)

Steps followed in Firebase Console- 

1.Login with your email.
2.Created a new project called ‘Demo Cloud Messaging’.

Steps followed in Android Studio -  (Project Location - androidStudioProjects->MyFirstMessApp)

1.Created a new Project - > my first mess app.
2.Selected an empty activity with a simple text view of ‘Hello World’.
3.Initially 2 files are generated : xml and the mainActivity.java
4.Add firebase permission for cloud messaging to the project. Tools->Firebase->cloud messaging.
5.Within this, connect to your project from firebase console. Then,  add FCM to your app.

6.Then add a new service---- under app>java>new class>FirebaseIDService.
7.Make the necessary changes in the file.
8.Edit the android manifest.xml file.
9.Connect your device and extract the registration token from logcat 
Then,
registrationToken = "<your registration token here>";


Steps in node.js server.
1.Create a new project. (wordsmaya learning > firebase_cloud )
2.Npm init.
3.Package.json generated.
4.Add the dependency for firebase-admin.	
5.Add the send.js file.
6.Run node send.js
7.You will get the following -
Successfully sent message: { results: [ { messageId: '0:1554115222360569%58f9a73758f9a737' } ],
  canonicalRegistrationTokenCount: 0,
  failureCount: 0,
  successCount: 1,
  multicastId: 6015091043743145000 }
