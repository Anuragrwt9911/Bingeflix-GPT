import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //updating the photo when sign in
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user; //destructung user id, email and
        //displayname from user object.
        //then we dispatch an action which is to addUser
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        ); //displatchin an action which is to add user and then passing some user objects to get the data from the user object into our redux store.
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/"); //it does not return anyhing
      }
    });
    return () => unsubscribe(); //unscubscibe our event listener
  }, []);
  return (
    <div className="p-2 m-2 bg-gradient-to-b from-black w-screen flex justify-between  items-center">
      <img className="h-[100px] object-cover" src={LOGO} alt="logo" />
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
