import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAA-ZcTv-cS7SgWKVYoX1NV_5lsJ6BS8Yg",
    authDomain: "nutrichat-70980.firebaseapp.com",
    projectId: "nutrichat-70980",
    storageBucket: "nutrichat-70980.appspot.com",
    messagingSenderId: "878223392555",
    appId: "1:878223392555:web:95b39722eb6a9da044cf6e",
    measurementId: "G-KW1ZYVK95V"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {app, firestore, auth};