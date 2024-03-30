// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { deleteDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1PoPXShTohjK86J8SryDzVwJJNj5OqOw",
  authDomain: "dars-843f4.firebaseapp.com",
  projectId: "dars-843f4",
  storageBucket: "dars-843f4.appspot.com",
  messagingSenderId: "579673900510",
  appId: "1:579673900510:web:39be091b43e2ac1b6f094f",
  measurementId: "G-QY64LP3XTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
