// Config
const config = {
  "senderId": "841751645592",
  "publicVapidKey": "BCrWAPjYoAd0Th6Rfdpt13N0NHIMtfl7SNXsdY3COJsrGD7mnvq6nQI6QDOJ32cJF-V0v7LwEA4uP-54aZKaO78"
}

// Initialize Firebase
firebase.initializeApp({
  messagingSenderId: config.senderId
});

// Do something
const messaging = firebase.messaging();

// Register service worker
navigator.serviceWorker.register('./firebase-messaging-sw.js')
.then((registration) => {
  messaging.useServiceWorker(registration);
  messaging.usePublicVapidKey(config.publicVapidKey);
  // Request permission and get token.....
  messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
    // Get Instance ID token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    messaging.getToken().then(function(currentToken) {
      if (currentToken) {
        sendTokenToServer(currentToken);
        updateUIForPushEnabled(currentToken);
      } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
      }
    }).catch(function(err) {
      console.log('An error occurred while retrieving token. ', err);
      showToken('Error retrieving Instance ID token. ', err);
      setTokenSentToServer(false);
    });
  }).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
  });
});

// FIXME: Persist token on server side
function sendTokenToServer(token) {
  console.log('FIXME: Obtained token: ', token);
}
function updateUIForPushEnabled(token) {
  console.log('FIXME: Push enabled for: ', token);
}

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
  messaging.getToken().then(function(refreshedToken) {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    setTokenSentToServer(false);
    // Send Instance ID token to app server.
    sendTokenToServer(refreshedToken);
    // ...
  }).catch(function(err) {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.onMessage(function(payload) {
  console.log('Message received. ', payload);
});

