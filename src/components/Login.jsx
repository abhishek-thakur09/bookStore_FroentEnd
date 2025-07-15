import React, { use, useRef, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { BACKGROUND_Image } from "../utils/constants";
import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setisSignInForm] = useState(true);
  const [ShowError, SetShowError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignin = () => {
    setisSignInForm(!isSignInForm);
  };


  const handleButtonClick = () => {
  
  };



  const handleGoogleLoginSuccess = ()=>{
    console.log("navigating to home");
      navigate('/home')
  }


  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover -z-10"
        src={BACKGROUND_Image}
        alt="background Image"
      />

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 sm:w-9/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-6 sm:p-8 bg-black/80 rounded-md text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="font-semibold text-2xl sm:text-3xl pb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 w-full rounded-sm bg-gray-700 placeholder-gray-400"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 mb-4 w-full rounded-sm bg-gray-700 placeholder-gray-400"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full rounded-sm bg-gray-700 placeholder-gray-400"
        />

        <p className="text-red-500 p-2 font-bold">{ShowError}</p>

        <button
          className="p-3 mb-4 text-blue-400 bg-white w-full rounded-sm hover:bg-blue-700 hover:text-white font-semibold cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 cursor-pointer" onClick={toggleSignin}>
          {isSignInForm
            ? "New to Bookrey? Sign Up Now"
            : "Already have an account, Sign In now"}
        </p>

        <div className="flex justify-around">
          <GoogleLogin onclick={handleGoogleLoginSuccess}/>
        </div>
      </form>
    </div>
  );
};

export default Login;
