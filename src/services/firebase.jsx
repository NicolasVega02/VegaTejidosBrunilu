// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjVcOWmQ6bPAWoX8uikMqLEPxDxFMTFBI",
  authDomain: "app-tejidos.firebaseapp.com",
  projectId: "app-tejidos",
  storageBucket: "app-tejidos.firebasestorage.app",
  messagingSenderId: "1046136100902",
  appId: "1:1046136100902:web:8d063de09036fda7f4aee7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);