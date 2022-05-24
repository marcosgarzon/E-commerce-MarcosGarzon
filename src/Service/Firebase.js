// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoeecPRAoe2GakhjBqt0uhX_TBL2L93Zo",
  authDomain: "e-commerce-marcosgarzon.firebaseapp.com",
  projectId: "e-commerce-marcosgarzon",
  storageBucket: "e-commerce-marcosgarzon.appspot.com",
  messagingSenderId: "214044650552",
  appId: "1:214044650552:web:7342e985a6be64741a8acd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db