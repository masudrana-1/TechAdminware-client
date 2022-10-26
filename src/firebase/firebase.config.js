// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa2fvFITzX8njeH5cplzPzWVbTe11nTFQ",
    authDomain: "techadminware.firebaseapp.com",
    projectId: "techadminware",
    storageBucket: "techadminware.appspot.com",
    messagingSenderId: "343016920147",
    appId: "1:343016920147:web:785f6458a0a2407fd1e2a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;