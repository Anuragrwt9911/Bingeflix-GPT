import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();

  //updating the photo when sign in
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="p- m-2 absolute bg-gradient-to-b from-black w-screen flex justify-between  items-center">
      <img
        className="h-[100px] object-cover"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {/**this will only be shown when user logged in */}
      {user && (
        <div className="cursor-pointer p-4 mr-2">
          <p className="text-white text-lg font-bold ">{user?.displayName}</p>
          <img className="size-10  " src={user?.photoURL} />
          <button
            onClick={() => handleSignOut()}
            className="my-2 rounded-lg text-white bg-red-500 hover:bg-red-600 text-lg px-2 py-1 font-bold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
