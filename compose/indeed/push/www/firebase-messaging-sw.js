importScripts('https://www.gstatic.com/firebasejs/5.5.7/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.7/firebase-messaging.js');

firebase.initializeApp({
  messagingSenderId: "841751645592"
});

const messaging = firebase.messaging();

