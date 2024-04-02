import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { addUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //updating the photo when sign in
  const user = useSelector((store) => store.user);
  //showing language select box only in gpt  page:
  //selecting showgptbutton in our gptslice
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

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

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    //dispatching change language  and give the the target value when selection optionsn are changed.
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="md:py-1 py-5 w-full  bg-black absolute z-10 md:px-6  px-2 bg-gradient-to-b from-black flex md:justify-between   items-center">
      <img
        className="md:h-[70px] h-[2.5rem] object-cover"
        src={LOGO}
        alt="logo"
      />
      {/**this will only be shown when user logged in */}
      {user && (
        <div className="cursor-pointer flex items-center ml-0 justify-end md:p-2 p-0 md:mr-2 ">
          {/* {showing gpt search only when showGptbutton state is true} and show in gpt page but not show in homepage */}
          {showGptSearch && (
            <select
              className="p-2 bg-gray-800 md:m-2 mr-0 text-white"
              onChange={handleLanguageChange}
            >
              {/**mapping through all supoorted languages arrray in constants file */}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="p-2 rounded-lg"
                  key={lang.identifier}
                  value={lang.name}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <ul className=" hidden md:flex text-white mr-8 max-w-full justify-between items-center  font-semibold   ">
            <li className=" mr-2 hover:border-b-2 p-2  duration-150 hover:text-orange-500  ">
              Home
            </li>
            <li className="mr-2 hover:border-b-2 p-2  duration-150  hover:text-orange-500 ">
              TV shows
            </li>
            <li className="mr-2 hover:border-b-2 p-2  duration-150 hover:text-orange-500  ">
              Originals
            </li>
            <li className="mr-2 hover:border-b-2 p-2  duration-150 hover:text-orange-500">
              My List
            </li>
            <li className="mr-2 hover:border-b-2 p-2  duration-150 hover:text-orange-500  ">
              Recently Added
            </li>
          </ul>
          <button
            onClick={() => handleGptSearchClick()}
            className="text-sm rounded-xl  bg-yellow-500  hover:bg-yellow-600 text-white  px-3 py-2 font-semibold mr-2 md:mr-6"
          >
            {/**is showgptSearch state is true(when cilcked) the button text would be homepage and vice-versa */}
            {showGptSearch ? "HomePage" : "GptSearch"}
          </button>
          <p className="text-white text-lg font-bold ">{user?.displayName}</p>
          <button
            onClick={() => handleSignOut()}
            className=" inline text-sm rounded-xl text-white bg-red-500 hover:bg-red-600  px-4 md:px-6 py-2 font-bold md:font-semibold"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
