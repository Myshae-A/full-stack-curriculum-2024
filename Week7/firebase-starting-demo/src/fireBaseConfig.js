// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtdlpTgTnkUxnSv3RwByISYiMR6qHPWYc",
  authDomain: "auth-demo-cfc02.firebaseapp.com",
  projectId: "auth-demo-cfc02",
  storageBucket: "auth-demo-cfc02.firebasestorage.app",
  messagingSenderId: "139108398289",
  appId: "1:139108398289:web:238fc1bf4fcb22c1e1c1f0",
  measurementId: "G-M9RKMSPR2L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()