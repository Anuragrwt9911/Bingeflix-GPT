import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { addUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showNavLinks, setShowNavLinks] = useState(true);

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
        if (window.location.pathname === "/") {
          navigate("/browse");
        }
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
    <div className="md:py-0 py-3  w-full bg-black fixed top-0 left-0 z-50 md:px-6  px-2 bg-gradient-to-b from-black flex md:justify-between items-center">
      <button
        onClick={() => setShowNavLinks(!showNavLinks)}
        className="md:hidden cursor-pointer "
      >
        {showNavLinks ? (
          <i class="  m-2  text-white text-xl md:text-2xl fa-solid fa-bars"></i>
        ) : (
          <i class="m-2 text-white text-xl md:text-2xl fa-solid fa-xmark"></i>
        )}
      </button>
      <img
        className="cursor-default md:h-[80px] md:w-[80px]  h-[50px] w-[50px]  object-cover md:mr-12 mr-2 ml-0 md:ml-4"
        src={
          "https://th.bing.com/th/id/OIP.pEnX3wBibLDqc8_mVPfUIAAAAA?rs=1&pid=ImgDetMain"
        }
        alt="logo"
      />
      <p className="md:block hidden absolute left-10 top-[55px] cursor-default font-bold text-[13px] font-[poppins] text-white">
        <span className="text-red-500">Bingeflix</span>-GPT
      </p>
      {/* <span className="absolute top-10 left-[36px] text-white font-[poppins] text-3xl font-[600]">
        BingleFlix-GPT
      </span> */}
      {user && (
        <div className="cursor-pointer flex items-center ml-0 justify-end md:p-2 p-0 md:mr-2 ">
          {/* {showing gpt search only when showGptbutton state is true} and show in gpt page but not show in homepage */}
          {showGptSearch && (
            <select
              className="p-2 bg-gray-800 md:m-2 mr-0 text-white font-[poppins]"
              onChange={handleLanguageChange}
            >
              {/**mapping through all supoorted languages arrray in constants file */}
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="md:p-1 rounded-lg"
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <ul
            className={`md:flex md:bg-black md:text-[15px]  text-sm md:text-white rounded-lg text-black md:mr-8    max-w-full md:justify-between md:items-center  font-[poppins] md:static absolute top-[4rem] left-4 bg-white md:p-1 pt-3 pb-10 px-3  cursor-pointer transition-all duration-200 ease-in-out  ${
              !showNavLinks ? "top-[5rem]" : "left-[-490px]"
            }  `}
          >
            <Link to={"/home"}>
              <li className="ml-2 mt-2 text-sm md:text-xl font-medium  hover:text-orange-500">
                Home
              </li>
            </Link>
            <button
              onClick={() => handleGptSearchClick()}
              className="text-sm rounded-xl md:hidden  bg-yellow-500  hover:bg-yellow-600 text-white  px-3 py-2  my-4"
            >
              {/**is showgptSearch state is true(when cilcked) the button text would be homepage and vice-versa */}
              <i class="fa-solid fa-fire "></i>{" "}
              {showGptSearch ? "HomePage" : "GPT Search"}
            </button>
            <br />
            <button
              onClick={() => handleSignOut()}
              className=" text-sm rounded-xl md:hidden text-white bg-red-500  px-3 md:px-3 py-2 "
            >
              <i class="fa-solid fa-right-from-bracket "></i> Sign Out
            </button>
          </ul>
          ) )
          <button
            onClick={() => handleGptSearchClick()}
            className="hidden md:block text-sm rounded-xl  bg-yellow-500  hover:bg-yellow-600 text-white  px-3 py-2 font-medium md:font-[poppins] md:font-bold mr-2 md:mr-6  transition-all duration-500 ease-in "
          >
            {/**is showgptSearch state is true(when cilcked) the button text would be homepage and vice-versa */}
            <i class="fa-solid fa-fire mr-3 md:mr-1"></i>{" "}
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <p className="static md:absolute top-[29px] right-[36rem] inline text-white text-lg font-bold font-[poppins] md:mr-0 mr-6 hover:text-orange-500 duration-500 ">
            😍Welcome!, {user?.displayName}
          </p>
          <button
            onClick={() => handleSignOut()}
            className="hidden md:inline text-sm rounded-xl text-white bg-red-500 hover:bg-red-600  duration-500 px-3 md:px-4 py-2 font-medium md:font-[poppins] md:font-bold"
          >
            <i class="fa-solid fa-right-from-bracket mr-0 md:mr-1"></i> Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
