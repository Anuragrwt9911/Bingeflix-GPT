import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full text-white bg-gradient-to-r from-black">
      <div className="relative  md:top-[10%] top-[7rem] left-[1rem] md:left-8 ">
        <p className="md:text-4xl text-md font-medium md:py-2 cursor-default">
          {title}
        </p>
        <p className="md:inline-block text-lg w-[350px] hidden  cursor-default">
          {overview}
        </p>
        <div className="w-[400px] my-6 ">
          <button className="md:px-5 sm:px-3 font-bold md:py-2 sm:py-2 md:mx-1 hover:bg-opacity-80 text-sm md:text-lg text-white sm:bg-black md:bg-gray-500 cursor-pointer rounded-xl ">
            ▶ Play
          </button>
          <button className="md:px-5 md:py-2 sm:px-3 sm:py-1  font-bold  mx-2 hover:bg-opacity-80 text-sm md:text-lg text-white sm:bg-black md:bg-gray-500 cursor-pointer rounded-xl ">
            ▶ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
