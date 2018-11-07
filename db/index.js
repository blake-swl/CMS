const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyCKRAnKKjKJzlMcPIOsXpgAsqpeM4DLeBc",
  authDomain: "blakes-cms.firebaseapp.com",
  databaseURL: "https://blakes-cms.firebaseio.com",
  projectId: "blakes-cms",
  storageBucket: "blakes-cms.appspot.com",
  messagingSenderId: "114962154442"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});



module.exports = db;