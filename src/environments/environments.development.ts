// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyiHr-t8O-SBoVyHlPf8-zpEcVuR3JKV8",
  authDomain: "che-proyecto-integrador-2023.firebaseapp.com",
  projectId: "che-proyecto-integrador-2023",
  storageBucket: "che-proyecto-integrador-2023.appspot.com",
  messagingSenderId: "20401184597",
  appId: "1:20401184597:web:86fcf1f3ca880af084d9dc",
  measurementId: "G-X2YEEHK87S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);