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

  // REACT_APP_apiKey=AIzaSyBKb1W0JijtG35TmbjlDadWXeaW2axWv_8
  // REACT_APP_authDomain=furniture-warehouse-ef519.firebaseapp.com
  // REACT_APP_projectId=furniture-warehouse-ef519
  // REACT_APP_storageBucket=furniture-warehouse-ef519.appspot.com
  // REACT_APP_messagingSenderId=449316261853
  // REACT_APP_appId=1:449316261853:web:cc6df7581f5982027c3034

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
