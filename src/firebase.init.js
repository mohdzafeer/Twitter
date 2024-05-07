// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"
// import { GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaHeBbx2uda6WjWgfFgf2SCW9N4q6VMAU",
  authDomain: "twitter-76506.firebaseapp.com",
  projectId: "twitter-76506",
  storageBucket: "twitter-76506.appspot.com",
  messagingSenderId: "104083624929",
  appId: "1:104083624929:web:01be2ee6a46035746338a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();