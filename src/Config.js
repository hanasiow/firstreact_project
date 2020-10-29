import* as firebase from 'firebase';

const settings = {timestampsInSnapshots: true}

var firebaseConfig = {
    apiKey: "AIzaSyCu5aqMDEIAXhQ11OzwmgSq7vD1VeAFs28",
    authDomain: "reactproject-78cea.firebaseapp.com",
    databaseURL: "https://reactproject-78cea.firebaseio.com",
    projectId: "reactproject-78cea",
    storageBucket: "reactproject-78cea.appspot.com",
    messagingSenderId: "1089193116453",
    appId: "1:1089193116453:web:ac421e5376110f9fa4d0cc"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);

  export default firebase;
