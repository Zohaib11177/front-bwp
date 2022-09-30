import firebase from "firebase/app";
import "firebase/messaging";
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js");

var firebaseConfig = {
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log("Received background message ", payload);

    // const notificationTitle = "asdasdasdas";
    const notificationOptions = {
        body: "asdsadsadsadsadsads",
        title: "asdasdasdsa",
    };

    // console.log(notificationTitle, notificationOptions);
    return self.registration.showNotification("title", {
        title: "asdasdasd",
        body: "asdasdsadasd",
    });
});
