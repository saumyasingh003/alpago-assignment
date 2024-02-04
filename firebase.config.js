// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC0H49d0K67yGYvprPf_5TSrzQG5-j3TE",
  authDomain: "test-16408.firebaseapp.com",
  databaseURL: "https://test-16408-default-rtdb.firebaseio.com",
  projectId: "test-16408",
  storageBucket: "test-16408.appspot.com",
  messagingSenderId: "279255768738",
  appId: "1:279255768738:web:0e8068d9f77132b5fe81fb",
  measurementId: "G-98WB05M0S6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;