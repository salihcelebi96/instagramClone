// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE7te2JZ-OcgXq9VnS5LYFxIGjRvmisdc",
  authDomain: "instagram-a1287.firebaseapp.com",
  projectId: "instagram-a1287",
  storageBucket: "instagram-a1287.appspot.com",
  messagingSenderId: "1044238880558",
  appId: "1:1044238880558:web:5b81f9c18d0c69397c34bf",
  measurementId: "G-FWJDS0X7LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);