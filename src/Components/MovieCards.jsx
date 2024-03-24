import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <img
      className="w-32 pr-4 rounded-sm "
      src={IMG_CDN_URL + posterPath}
      alt="movieCard"
    />
  );
};

export default MovieCards;
