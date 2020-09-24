import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyD0f6T7r5qHx3v6myeZEkUjS-cuxoLmuE8",
    authDomain: "homeoffice-67e79.firebaseapp.com",
    databaseURL: "https://homeoffice-67e79.firebaseio.com",
    projectId: "homeoffice-67e79",
    storageBucket: "homeoffice-67e79.appspot.com",
    messagingSenderId: "157798564904",
    appId: "1:157798564904:web:0fc702d3a7c7339476e11d",
    measurementId: "G-WNNJ9461PJ"
};

var fireDb = firebase.initializeApp(firebaseConfig);
export default  fireDb.database().ref()
