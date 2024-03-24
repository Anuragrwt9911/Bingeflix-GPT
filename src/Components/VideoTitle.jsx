import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mx-4 absolute pt-[14%] bg-gradient-to-r from-black px-[24px] w-screen aspect-video text-white">
      <p className="text-6xl font-medium mb-8">{title}</p>
      <p className="text-lg w-[350px] ">{overview}</p>
      <div className="w-[400px] my-6 ">
        <button className="px-8 font-bold py-4  mx-2 hover:bg-opacity-80  text-lg text-white bg-gray-500 cursor-pointer rounded-xl  shadow-lg">
          ▶ Play
        </button>
        <button className="px-8 py-4 font-bold  mx-2 hover:bg-opacity-80 text-lg text-white bg-gray-500 cursor-pointer rounded-xl shadow-lg">
          ▶ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
