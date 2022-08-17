/* Author: Sebastian Aguirre Duque - José Félix Céspedes
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC84uBo8IHqc0lxGaiMaFDubEmAM-wcif4",
  authDomain: "buffalo-app-academia-geek-sad.firebaseapp.com",
  projectId: "buffalo-app-academia-geek-sad",
  storageBucket: "buffalo-app-academia-geek-sad.appspot.com",
  messagingSenderId: "734851305139",
  appId: "1:734851305139:web:1c6aa7dd259183a0eeaac6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const google = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore(app);

console.log(google);

export default app;
export { google, db };