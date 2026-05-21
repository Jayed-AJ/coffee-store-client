// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB82ioNo-dTeUxKvOBnNrsLjPqYjyXfB9M",
  authDomain: "coffee-store-b1a5d.firebaseapp.com",
  projectId: "coffee-store-b1a5d",
  storageBucket: "coffee-store-b1a5d.firebasestorage.app",
  messagingSenderId: "4506748958",
  appId: "1:4506748958:web:c1529fb68b4d8f588a460f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);