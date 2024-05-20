// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlqNeYhaIuMGnT9l445Vcf-dQX5ozVyM0",
  authDomain: "ciie-login.firebaseapp.com",
  projectId: "ciie-login",
  storageBucket: "ciie-login.appspot.com",
  messagingSenderId: "804206683241",
  appId: "1:804206683241:web:f552e50359ccfbeb5faef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
