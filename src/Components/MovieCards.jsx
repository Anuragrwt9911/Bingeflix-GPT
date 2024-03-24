import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  return (
    <img
      className="size-48 p-3"
      src={IMG_CDN_URL + posterPath}
      alt="movieCard"
    />
  );
};

export default MovieCards;
