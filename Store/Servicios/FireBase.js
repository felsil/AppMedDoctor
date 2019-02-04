 import * as firebase from 'firebase';
 
 // Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbxX4tg5Snp5FctEaiyIik8z3crxflNPE",
    authDomain: "livapp-54326.firebaseapp.com",
    databaseURL: "https://livapp-54326.firebaseio.com",
    projectId: "livapp-54326",
    storageBucket: "livapp-54326.appspot.com",
    messagingSenderId: "856313778849"
  };
  firebase.initializeApp(config);

  export const autenticacion = firebase.auth();
  export const baseDeDatos = firebase.database();