// src/services/authService.js
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../firebaseConfig"; // adjust this if your firebase config file is named differently

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// --- Login Function ---
export const login = () => {
  return signInWithPopup(auth, provider);
};

// --- Logout Function ---
export const logout = () => {
  return signOut(auth);
};

// --- Custom Hook to Track Auth State ---
export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  return user;
};
