// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-_lnwCW5R0TTxpvAdwk5z2da49I4EDus",
  authDomain: "netflixgpt-34d12.firebaseapp.com",
  projectId: "netflixgpt-34d12",
  storageBucket: "netflixgpt-34d12.firebasestorage.app",
  messagingSenderId: "421947841461",
  appId: "1:421947841461:web:d42a59f062a6e6052457fc",
  measurementId: "G-JSJL4L14R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
