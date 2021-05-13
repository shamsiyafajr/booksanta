import firebase from 'firebase';
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyBj7zvgWKMOP2eBNDhcEEKMUK6q6wlvNY8",
    authDomain: "new-project-cf062.firebaseapp.com",
    databaseURL: "https://new-project-cf062-default-rtdb.firebaseio.com",
    projectId: "new-project-cf062",
    storageBucket: "new-project-cf062.appspot.com",
    messagingSenderId: "1086388693675",
    appId: "1:1086388693675:web:f6d75a3a5b895a4c9aa5ee"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  {
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase.firestore();
