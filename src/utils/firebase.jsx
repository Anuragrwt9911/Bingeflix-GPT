// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcz-IJBkUZ_IIja1-9Imu-v_xDpXi9fEs",
  authDomain: "netflixgpt-a5f2b.firebaseapp.com",
  projectId: "netflixgpt-a5f2b",
  storageBucket: "netflixgpt-a5f2b.appspot.com",
  messagingSenderId: "913719306188",
  appId: "1:913719306188:web:2ef0182509c793921b9f69",
  measurementId: "G-95BGFSXPX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//calling getauth one time from here
export const auth = getAuth();
