import React from "react";
import Overview from "./MovieInfo";
import { useSelector } from "react-redux";
import MovieInfo from "./MovieInfo";
import MovieCast from "./MovieCast";
import MovieVideos from "./MovieVideos";

const MovieInfoContainer = () => {
  return (
    <div>
      <MovieInfo />
      <MovieCast />
      <MovieVideos />
    </div>
  );
};

export default MovieInfoContainer;
