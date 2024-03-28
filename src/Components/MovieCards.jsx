import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <img
      className="size-48  rounded-md shadow-sm mr-3 cursor-pointer md:hover:scale-110 duration-300  "
      src={IMG_CDN_URL + posterPath}
      alt="movieCard"
    />
  );
};

export default MovieCards;
