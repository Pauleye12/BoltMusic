// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD9bwPQVNw6idpZQy8yr7wTl1nFOQvRh4",
  authDomain: "boltmusic-c3b69.firebaseapp.com",
  projectId: "boltmusic-c3b69",
  storageBucket: "boltmusic-c3b69.appspot.com",
  messagingSenderId: "524554037486",
  appId: "1:524554037486:web:5f6474215a98937d42abff",
  measurementId: "G-H0TQRV8FE2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
