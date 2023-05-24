// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArzop0-agGvMNw_vGrqdFu9jdveUHwkfA",
  authDomain: "cway-demo.firebaseapp.com",
  projectId: "cway-demo",
  storageBucket: "cway-demo.appspot.com",
  messagingSenderId: "601612742628",
  appId: "1:601612742628:web:913c6f8aecd507073d61f1",
  measurementId: "G-MKKBRFBB0L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
