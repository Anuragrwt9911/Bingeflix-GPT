import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = ({ title, overview, id }) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full text-white bg-gradient-to-r from-black">
      <div className="relative  md:top-[15%] top-[5rem] left-0  md:left-8 ">
        <p className="md:text-6xl ml-8 text-2xl font-bold md:py-2 cursor-default">
          {title}
        </p>
        <p className="md:inline-block text-[16px] my-4 ml-8 w-[350px] hidden  cursor-default font-[poppins]">
          {overview}
        </p>
        <div className="w-[400px] my-6 ml-8 ">
          <Link to={"/overview/" + id}>
            {" "}
            <button className="md:px-5 md:py-2 sm:px-3 sm:py-1   mx-2 hover:bg-opacity-80 text-sm md:text-lg text-white sm:bg-black md:bg-gray-500 cursor-pointer rounded-xl font-[poppins] md:hover:border md:border-white bg-slate-400 px-2 py-1">
              <i class="rounded-full px-3 py-2 mr-2 text-[10px]  md:text-sm border md:border-white fa-solid fa-info "></i>{" "}
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
