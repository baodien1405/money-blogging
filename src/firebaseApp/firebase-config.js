// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClYKwyP7Q5o-TEvimCCtVBENEcsfCyPNU",
  authDomain: "monkey-blogging-1b9ba.firebaseapp.com",
  projectId: "monkey-blogging-1b9ba",
  storageBucket: "monkey-blogging-1b9ba.appspot.com",
  messagingSenderId: "300695234440",
  appId: "1:300695234440:web:5debb9db92607a99483c3d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
