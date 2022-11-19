import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBDRQxSDIjZZK5fAkTajnt3ksRKO-39agg",
    authDomain: "loot-e66d3.firebaseapp.com",
    projectId: "loot-e66d3",
    storageBucket: "loot-e66d3.appspot.com",
    messagingSenderId: "688287282611",
    appId: "1:688287282611:web:a6dd60d1ded67c40f587c6",
    measurementId: "G-3V4PGMS5Z7"
};

// Firebase initialization
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Get firestore
const db = firebaseApp.firestore();

// Exports
export { db };