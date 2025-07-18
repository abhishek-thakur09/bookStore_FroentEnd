// src/components/GoogleLogin.js
import React from "react";
import { auth } from "../utils/Firebase";
import {GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Google_Logo } from "../utils/constants";
import { useUser } from "./UserContext";





const GoogleLogin = ({ onclick }) => {

  const {setUser} = useUser();
  
  const handleGoogleSignIn = async() => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      console.log("✅ Signed in user:", user);
      console.log(user.displayName);
      
      console.log("🪪 Token:", token);


      // Prepare user data to send to backend
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL, // Optional: user's profile picture
        token: token,
      };

      // Send user data to backend
      const response = await fetch("http://localhost:9999/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log("Backend response:", data);

      
      if (typeof onclick === "function") {
        onclick(); // ✅ Now this will work correctly
      } else {
        console.warn("onclick is not a function:", onclick);
      }
    } catch (error) {
      console.error("Google sign-in error", error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex justify-center gap-3 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 font-medium shadow-md"
    >
      Continue with Google
      <img src={Google_Logo} className="flex items-center my-1 w-5 h-5" alt="Google Logo" />
    </button>
  );
};

export default GoogleLogin;
