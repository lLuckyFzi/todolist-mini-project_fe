// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4MGv1f-Zeb3THHcdQ5HBBdUybBMBEWZ8",
  authDomain: "todolist-fba7e.firebaseapp.com",
  projectId: "todolist-fba7e",
  storageBucket: "todolist-fba7e.appspot.com",
  messagingSenderId: "154580826510",
  appId: "1:154580826510:web:b5c3bb26f876162f910cdf",
  measurementId: "G-F2Y8FNDCS4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export default { app, analytics, db };
