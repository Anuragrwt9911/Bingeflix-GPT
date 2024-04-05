import React, { useRef, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //taking reference of both inputs using useRef hook

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    //toggling signIn form:
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    //validate the form data
    console.log(email.current.value); //got my email value from the object taken by useref
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrMsg(message); //return the result given by the message variable

    //if my message is present(means validation not successful or error)

    if (message) return; //then don't go ahead (bcoz it contains error) means don't create a user when error msg occurs.
    if (!isSignIn) {
      //if its' not sign in form
      //sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser; //destructung user id, email and
              //displayname from new user .
              //then we dispatch an action which is to addUser
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
                // Profile updated!--> then navigate
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrMsg(message.error);
              // An error occurred
              // ...
            });

          console.log(user); //we are consoling the user when sign up
          //redicret the user to brows page when sign in
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode, errorMessage); //if error contains in the form
          // ..
        });
    } else {
      //sign in form logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // navigate("/browse");//it automatically navigate to browse page when auth state changed
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className="font-[poppins]">
      <Header />
      <div className="">
        <img
          className="object-cover md:h-screen md-h-screen h-screen w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-lg md:text-md flex justify-center items-center flex-col md:max-h-[1000px] shadow-lg absolute z-10 px-5 py-5 md:px-7 md:py-3 md:p-8 rounded-md w-[323px] md:w-[400px] text-white bg-black md:top-[15vh] top-[10rem] right-[2rem] md:left-[59vh] bg-opacity-80"
      >
        <h2 className="text-white text-3xl md:text-4xl  font-bold my-3">
          {isSignIn ? "Sign in" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <>
            {" "}
            <input
              type="text"
              placeholder="Full Name"
              ref={name}
              className="w-full p-3 m-2  font-medium rounded-lg bg-gray-700"
            />
          </>
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="w-full p-3 m-2 font-medium  rounded-lg  bg-gray-700"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className=" w-full p-3 m-2  font-medium rounded-lg bg-gray-700 "
        />
        <p className="text-red-500">{errMsg}</p>

        <button
          onClick={() => handleButtonClick()}
          className="w-full mt-4 rounded-lg px-3 py-2 font-bold bg-red-600 text-white hover:bg-red-700 duration-200"
        >
          {isSignIn ? "Sign in" : "Sign Up"}
        </button>
        <div className="flex flex-col justify-center items-center gap-4 mt-4">
          <span className="text-white font-light">OR</span>

          <div className="flex justify-start flex-col gap-3 mr-20">
            <span className="text-white font-light">
              {isSignIn ? "New to Netflix?" : "Already Registered"}{" "}
              <p
                onClick={() => toggleSignInForm()}
                className="font-bold inline hover:underline cursor-pointer "
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
