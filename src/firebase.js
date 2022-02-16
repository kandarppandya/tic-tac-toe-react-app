import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig  = {
    apiKey: "AIzaSyCkFB9sSA6SQnWyUP5cvURBnztNhpWzUrc",
    authDomain: "shootitgo-5df01.firebaseapp.com",
    databaseURL: "https://shootitgo-5df01.firebaseio.com",
    projectId: "shootitgo-5df01",
    storageBucket: "shootitgo-5df01.appspot.com",
    messagingSenderId: "801363169608",
    appId: "1:801363169608:web:a79aa6763d22ef3be5a37d",
    measurementId: "G-7V06RGB1JS"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;