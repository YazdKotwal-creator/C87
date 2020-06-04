import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDssOY3dXwou_lbJ67YnhIxpLgI7R6tOLk",
    authDomain: "book-santa-18f35.firebaseapp.com",
    databaseURL: "https://book-santa-18f35.firebaseio.com",
    projectId: "book-santa-18f35",
    storageBucket: "book-santa-18f35.appspot.com",
    messagingSenderId: "246351283343",
    appId: "1:246351283343:web:2b6f774a3c48b08da1dcfa",
    measurementId: "G-BJZ60LCFFJ"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();