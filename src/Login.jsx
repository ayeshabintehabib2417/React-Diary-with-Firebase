import { useState } from "react";
import { signInWithPopup } from "firebase/auth"; // Import the method for signing in with a popup
import { auth, provider } from "./firebaseConfig"; // Import the auth and provider from firebaseConfig
import { useNavigate } from "react-router-dom"; // For redirecting after login

const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Sign in with Google
      const result = await signInWithPopup(auth, provider);

      // The signed-in user info
      const user = result.user;
      console.log("User:", user); // You can check the user info here

      // Redirect to the BlogList page after successful login
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
      setError(error.message); // Set error if login fails
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Welcome to the Blog</h2>
      <button onClick={handleLogin}>Login with Google</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
