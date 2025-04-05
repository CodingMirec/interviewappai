// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOr_lnPkgMcA3fJOsCEXJ7KpD9s8CtSi4",
  authDomain: "prepwise-44b4f.firebaseapp.com",
  projectId: "prepwise-44b4f",
  storageBucket: "prepwise-44b4f.firebasestorage.app",
  messagingSenderId: "373938920516",
  appId: "1:373938920516:web:d2157af49ce979b9ebb011",
  measurementId: "G-8TF9HPREG1"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);