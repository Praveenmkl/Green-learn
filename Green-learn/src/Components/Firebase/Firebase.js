// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { auth } from "../../firebase.js";  // Update the import path to include .js extension

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1hZKATYR3wh0DXSTWEv2PKggeRmcHWLM",
  authDomain: "greenlearn-220e5.firebaseapp.com",
  projectId: "greenlearn-220e5",
  storageBucket: "greenlearn-220e5.firebasestorage.app",
  messagingSenderId: "981482683614",
  appId: "1:981482683614:web:f4bbd0691b3ece39a5964f",
  measurementId: "G-5STNXEGL0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export const auth = getAuth();
export const db = getFirestore();
export { storage };
export default app;s