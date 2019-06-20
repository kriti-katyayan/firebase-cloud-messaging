# firebase-cloud-messaging

Aim :  To generate notifications from the custom backend server in node.js to the client app.

3 components - 
Firebase Console 
Android Studio (frontend for App)
Node.js (server-side)

Steps followed in Firebase Console- 

Login with katyayankriti@gmail.com.
Created a new project called ‘Demo Cloud Messaging’.

Steps followed in Android Studio -  (Project Location - androidStudioProjects->MyFirstMessApp)

Created a new Project - > my first mess app.
Selected an empty activity with a simple text view of ‘Hello World’.
Initially 2 files are generated : xml and the mainActivity.java
Add firebase permission for cloud messaging to the project. Tools->Firebase->cloud messaging.
Within this, connect to your project from firebase console. Then,  add FCM to your app.

Then add a new service---- under app>java>new class>FirebaseIDService.
Make the necessary changes in the file.
Edit the android manifest.xml file.
Connect your device and extract the registration token from logcat 
Then,
registrationToken = "<your registration token here>";

Steps in node.js server.
Create a new project. (wordsmaya learning > firebase_cloud )
Npm init.
Package.json generated.
Add the dependency for firebase-admin.	
Add the send.js file.
Run node send.js
You will get the following -
Successfully sent message: { results: [ { messageId: '' } ],
  canonicalRegistrationTokenCount: 0,
  failureCount: 0,
  successCount: 1,
  multicastId:  }
