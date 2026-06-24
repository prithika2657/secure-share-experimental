// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcIYY2HvMfU4hvgXrchfAtvz96JEYw_vA",
  authDomain: "share-v2-cba66.firebaseapp.com",
  projectId: "share-v2-cba66",
  storageBucket: "share-v2-cba66.firebasestorage.app",
  messagingSenderId: "459126544980",
  appId: "1:459126544980:web:3a80f2e9d6c251d003ebc1",
  measurementId: "G-24RQ6GB34B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);