import React, { useState } from "react";
import Header from "./Header";
import Body from "./Body";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-image"
        />
      </div>
      <form className="max-h-[1000px] shadow-lg absolute z-10  flex justify-center items-center flex-col p-8 rounded-md w-[400px] bg-black top-[10vh] left-[55vh] bg-opacity-80">
        <h2 className="text-white  text-4xl  font-bold my-3">
          {isSignIn ? "Sign in" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <>
            {" "}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 m-2  font-medium rounded-lg bg-gray-700 "
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-3 m-2 font-medium  rounded-lg  bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 m-2  font-medium rounded-lg bg-gray-700 "
        />

        <button className="w-full mt-4 rounded-lg px-3 py-2 font-bold bg-red-600 text-white hover:bg-red-700 duration-200">
          {isSignIn ? "Sign in" : "Sign Up"}
        </button>
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          <span className="text-white font-light">OR</span>
          <span className="text-white font-bold cursor-pointer">
            Use a Sign-in code
          </span>
          <span className="text-white hover:underline cursor-pointer">
            Forgot Password?
          </span>

          <div className="flex justify-start flex-col gap-3 mr-20">
            <span className="text-white">
              <i class="fa-solid fa-check mx-2 p-[1px] cursor-pointer bg-white rounded-sm text-black"></i>
              Remember Me
            </span>
            <span className="text-white font-light">
              {isSignIn ? "New to Netflix?" : "Already Registered"}{" "}
              <p
                onClick={() => toggleSignInForm()}
                className="font-bold inline hover:underline cursor-pointer"
              >
                {isSignIn ? "Sign-Up now" : "Sign-In now"}
              </p>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
