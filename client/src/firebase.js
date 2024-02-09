// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fada8.firebaseapp.com",
  projectId: "mern-blog-fada8",
  storageBucket: "mern-blog-fada8.appspot.com",
  messagingSenderId: "920489499254",
  appId: "1:920489499254:web:965e77967c56f48f721d57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
