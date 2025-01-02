import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDbw-9qSh6rg0mJFtFj3nnpWlQee6g2wgE",
  authDomain: "exercise-opreg.firebaseapp.com",
  projectId: "exercise-opreg",
  storageBucket: "exercise-opreg.firebasestorage.app",
  messagingSenderId: "1066680144466",
  appId: "1:1066680144466:web:489f1b080f5c822344858b",
  measurementId: "G-3N8YRP2SBD"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;