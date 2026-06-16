import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3rZsDKwUJSFEX8t5SU2e-FG44DkNKZVw",
  authDomain: "share-d48d8.firebaseapp.com",
  projectId: "share-d48d8",
  storageBucket: "share-d48d8.firebasestorage.app",
  messagingSenderId: "203577847759",
  appId: "1:203577847759:web:81540af64b252fe9f82cba",
  measurementId: "G-LQCHJDXCL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);