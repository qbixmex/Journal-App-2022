import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfx1wLSV7g-1GLk8HQmSpW-VK0ldHq88E",
  authDomain: "react-udemy-2022.firebaseapp.com",
  projectId: "react-udemy-2022",
  storageBucket: "react-udemy-2022.appspot.com",
  messagingSenderId: "190035837469",
  appId: "1:190035837469:web:d7d56c622ace24af30bcf4"
};

// Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

// Authentication
export const FirebaseAuth = getAuth( FirebaseApp );

// Database
export const FirebaseDB = getFirestore( FirebaseApp );
