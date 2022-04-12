/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');
   
/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    databaseURL: "https://XXXX.firebaseio.com",
    apiKey: "AIzaSyBJbyod-BezUu87dr_fjnV6yrYXVQH28lU",
    authDomain: "web-push-90320.firebaseapp.com",
    projectId: "web-push-90320",
    storageBucket: "web-push-90320.appspot.com",
    messagingSenderId: "312628699803",
    appId: "1:312628699803:web:541e556e84661de4f9dc3e",
    measurementId: "G-RNFSX709Z5"
    });
  
/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    /* Customize notification here */
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };
  
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});