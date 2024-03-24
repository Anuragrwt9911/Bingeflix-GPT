import React from "react";

const GptSearchBar = () => {
  return (
    <div className="top-20 left-[50vh]  absolute bg-black p-1  rounded-xl  ">
      <form className="">
        <input
          className="px-8 py-4 w-[400px] rounded-xl focus:outline-none    "
          type="text"
          placeholder="Search.."
        />
        <button className="rounded-xl  bg-red-600 px-8 py-4 text-white shadow-lg font-bold">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
