import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-xZF4V0lUvflVbqjJZmg8MKul5Ge0brU",
  authDomain: "blog-app-6fc5c.firebaseapp.com",
  projectId: "blog-app-6fc5c",
  storageBucket: "blog-app-6fc5c.firebasestorage.app",
  messagingSenderId: "20558410095",
  appId: "1:20558410095:web:cae472b87da8cff9b2b89a",
  measurementId: "G-P2E0PZYHMG"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, provider, db };