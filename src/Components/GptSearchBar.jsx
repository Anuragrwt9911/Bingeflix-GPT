import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  //subscribing to our store with lang state.
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="top-20 left-[50vh]  absolute bg-black p-1  rounded-xl  ">
      <form className="">
        <input
          className="px-8 py-4 w-[400px] rounded-xl focus:outline-none    "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="rounded-xl  bg-red-600 px-8 py-4 text-white shadow-lg font-bold">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
