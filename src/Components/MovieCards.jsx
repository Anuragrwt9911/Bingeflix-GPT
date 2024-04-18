import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath, movieName }) => {
  return (
    <div className="md:w-[145px] w-[140px] h-full mr-2 md:mr-3 cursor-default">
      <img
        className=" md:h-[12rem] md:w-[18rem] h-[10rem] w-[11rem] object-cover rounded-md shadow-lg cursor-pointer md:hover:scale-110 duration-300  "
        src={IMG_CDN_URL + posterPath}
        alt="movieCard"
      />
      <p className="text-sm font-medium font-[poppins] my-3 ">{movieName}</p>
    </div>
  );
};

export default MovieCards;
