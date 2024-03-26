import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full text-white bg-gradient-to-r from-black">
      <div className="relative top-[10%] left-8">
        <p className="text-4xl font-medium py-2">{title}</p>
        <p className="text-lg w-[350px] ">{overview}</p>
        <div className="w-[400px] my-6 ">
          <button className="px-5 font-bold py-2  mx-2 hover:bg-opacity-80  text-lg text-white bg-gray-500 cursor-pointer rounded-xl ">
            ▶ Play
          </button>
          <button className="px-5 py-2 font-bold  mx-2 hover:bg-opacity-80 text-lg text-white bg-gray-500 cursor-pointer rounded-xl ">
            ▶ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
