// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, Firestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhZHQrAJ4XA_6_IbI2MUau1Ot_XyWNHj4",
  authDomain: "dc-95a57.firebaseapp.com",
  projectId: "dc-95a57",
  storageBucket: "dc-95a57.appspot.com",
  messagingSenderId: "307834956329",
  appId: "1:307834956329:web:e1863a146582c0cefe0a38",
  measurementId: "G-RWQKBQT8D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore: Firestore = getFirestore(app);