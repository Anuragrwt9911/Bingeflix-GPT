// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_CONFIG_API_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_CONFIG_API_KEY,
  authDomain: "bingeflix-gpt-b8288.firebaseapp.com",
  projectId: "bingeflix-gpt-b8288",
  storageBucket: "bingeflix-gpt-b8288.appspot.com",
  messagingSenderId: "254475337842",
  appId: "1:254475337842:web:5368589ee87d21e98642eb",
  measurementId: "G-PV26NY4BYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//calling getauth one time from here
export const auth = getAuth();
