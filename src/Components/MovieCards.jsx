import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath, movieName }) => {
  return (
    <div className="md:w-[145px] w-[130px] h-full mr-3">
      <img
        className=" size-48 object-cover rounded-md shadow-lg cursor-pointer md:hover:scale-110 duration-300  "
        src={IMG_CDN_URL + posterPath}
        alt="movieCard"
      />
      <p className="text-sm font-medium my-2 ">{movieName}</p>
    </div>
  );
};

export default MovieCards;
