// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj9kDQqWrRrtg-ZxcPNj4lkqctOsqWZM4",
    authDomain: "compacttests-d6edf.firebaseapp.com",
    projectId: "compacttests-d6edf",
    storageBucket: "compacttests-d6edf.firebasestorage.app",
    messagingSenderId: "522903047970",
    appId: "1:522903047970:web:d93e881776b5f9a9a3df7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore instance
const db = getFirestore(app);
export { db };