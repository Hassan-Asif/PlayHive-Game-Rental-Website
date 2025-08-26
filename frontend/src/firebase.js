// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnme0_88tmhiJTfl4ugJczTT0J9pffDRE",
  authDomain: "playhive-67e29.firebaseapp.com",
  projectId: "playhive-67e29",
  storageBucket: "playhive-67e29.firebasestorage.app",
  messagingSenderId: "474414789224",
  appId: "1:474414789224:web:ebfd38b495cfc4ffab81dd",
  measurementId: "G-KZ5FSNR0SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);