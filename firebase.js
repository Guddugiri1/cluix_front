"use client"
import { getAnalytics } from 'firebase/analytics';

import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyBEW1Rzt9qUAYA6UMrlIw6Vq1xBabh5Lnc",
    authDomain: "resume-999bb.firebaseapp.com",
    projectId: "resume-999bb",
    storageBucket: "resume-999bb.appspot.com",
    messagingSenderId: "506476784392",
    appId: "1:506476784392:web:72021b3b2ce18ba84adabd",
    measurementId: "G-EYJLTYYL5B"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)
export { storage }
export default db;