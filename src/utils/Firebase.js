// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvR2oDGfrF5Ew5R3zfblg9MhfxRZIcyH0",
  authDomain: "bookstore-7d5d8.firebaseapp.com",
  projectId: "bookstore-7d5d8",
  storageBucket: "bookstore-7d5d8.firebasestorage.app",
  messagingSenderId: "794602060353",
  appId: "1:794602060353:web:cf726e8f01361c80c8e4c0",
  measurementId: "G-HZ9TXL452S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();