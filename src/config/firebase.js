// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzg3LR7LMFAbwFrhCPkBFXI2MvVGJeFK4",
    authDomain: "bakery-app-b7cb0.firebaseapp.com",
    projectId: "bakery-app-b7cb0",
    storageBucket: "bakery-app-b7cb0.firebasestorage.app",
    messagingSenderId: "574290003287",
    appId: "1:574290003287:web:559be003799f12c8e1aa12",
    measurementId: "G-5K52LSXJVY"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
export default app;