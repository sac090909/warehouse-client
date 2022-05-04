// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKb1W0JijtG35TmbjlDadWXeaW2axWv_8",
  authDomain: "furniture-warehouse-ef519.firebaseapp.com",
  projectId: "furniture-warehouse-ef519",
  storageBucket: "furniture-warehouse-ef519.appspot.com",
  messagingSenderId: "449316261853",
  appId: "1:449316261853:web:cc6df7581f5982027c3034",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
