// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBi1GfpgUZ0GooEbLV86lobU1R4Z_V7g0",
  authDomain: "henryland-43ded.firebaseapp.com",
  projectId: "henryland-43ded",
  storageBucket: "henryland-43ded.firebasestorage.app",
  messagingSenderId: "848429034891",
  appId: "1:848429034891:web:1a962a60e2b903f434538e",
  measurementId: "G-CNYY36G4FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);