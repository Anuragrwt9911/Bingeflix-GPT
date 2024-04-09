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
import { LOGO } from "../utils/constants";

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
    <div className="md:py-2 py-3  w-full bg-black fixed top-0 left-0 z-50 md:px-6  px-2 bg-gradient-to-b from-black flex md:justify-between items-center">
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
        className="md:h-[30px]  h-[20px]  object-cover md:mr-12 mr-2 ml-0 md:ml-4"
        src={LOGO}
        alt="logo"
      />
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
                  value={lang.name}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <ul
            className={`md:flex md:bg-black md:text-[15px]  text-sm md:text-white rounded-lg text-black md:mr-8    max-w-full md:justify-between md:items-center  font-[poppins] md:static absolute top-[4rem] left-4 bg-white md:p-1 pt-3 pb-10 px-4  cursor-pointer transition-all duration-200 ease-in-out  ${
              !showNavLinks ? "top-[5rem]" : "left-[-490px]"
            }  `}
          >
            <li className=" mr-3 p-2  duration-300 hover:text-orange-500  ">
              <i class="mr-3 md:mr-1 fa-solid fa-house"></i>{" "}
              <Link to="/home">Home</Link>
            </li>
            <li className="mr-3 p-2  duration-300 hover:text-orange-500 ">
              <i class="mr-3 md:mr-1 fa-solid fa-tv"></i>{" "}
              <Link to="/tvshows">TV Shows</Link>
            </li>
            <li className="mr-3  p-2  duration-300 hover:text-orange-500  ">
              <i class="mr-3 md:mr-1 fa-solid fa-clapperboard"></i>Originals
            </li>
            <li className="mr-3 p-2  duration-300 hover:text-orange-500">
              <i class="mr-3  md:mr-1 fa-solid fa-film"></i> My List
            </li>
          </ul>
          ) )
          <button
            onClick={() => handleGptSearchClick()}
            className={`md:block  md:static absolute   text-sm rounded-xl  bg-yellow-500  hover:bg-yellow-600 text-white  px-3 py-2 font-medium md:font-[poppins] md:font-bold mr-2 md:mr-6  transition-all duration-500 ease-in ${
              !showNavLinks ? "top-[218px] left-7" : "hidden"
            }
            }  `}
          >
            {/**is showgptSearch state is true(when cilcked) the button text would be homepage and vice-versa */}
            <i class="fa-solid fa-fire mr-3 md:mr-1"></i>{" "}
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <p className="text-white text-lg font-bold ">{user?.displayName}</p>
          <button
            onClick={() => handleSignOut()}
            className=" inline text-sm rounded-xl text-white bg-red-500 hover:bg-red-600  px-4 md:px-4 py-2 font-medium md:font-[poppins] md:font-bold"
          >
            <i class="fa-solid fa-right-from-bracket mr-0 md:mr-1"></i> Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
