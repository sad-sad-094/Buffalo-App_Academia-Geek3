/* Author: Sebastian Aguirre Duque - José Félix Céspedes
<<<<<<< HEAD
E-mail: sadw621@gmail.com - j.f.gcespedes@hotmail.com */

// Import the functions you need from the SDKs you need
import  initializeApp  from "firebase/app";
import firebase from "firebase";
import 'firebase/firestore';
=======
E-mail: sadw621@gmail.com -  */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
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
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
const google = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore(app);

export default app;
export { google, db };
=======

export default app;
>>>>>>> a3a20466dfcead2efe6f091fe9aeccb8fd03b6a0
