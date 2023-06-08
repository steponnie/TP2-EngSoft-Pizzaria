// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRRg8jaNUO4g0eyUmEJMfp_eGF0Ipdh54",
  authDomain: "les-tp2.firebaseapp.com",
  projectId: "les-tp2",
  storageBucket: "les-tp2.appspot.com",
  messagingSenderId: "930060727706",
  appId: "1:930060727706:web:32c038107602379a8f3623",
  measurementId: "G-R3NY1HNEWR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { firebaseApp }
