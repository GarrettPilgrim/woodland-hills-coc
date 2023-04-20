// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALHwmSkhuYBU99YReaiNfYYiqnupamgxk",
  authDomain: "whsite.firebaseapp.com",
  projectId: "whsite",
  storageBucket: "whsite.appspot.com",
  messagingSenderId: "729597825577",
  appId: "1:729597825577:web:b2de088f58e1077649c238",
  measurementId: "G-NKWN9RPN3T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
