import React from "react";
import Overview from "./MovieInfo";
import { useSelector } from "react-redux";
import MovieInfo from "./MovieInfo";
import MovieCast from "./MovieCast";
import MovieVideos from "./MovieVideos";
import useMovieInfo from "../hooks/useMovieInfo";
import { useParams } from "react-router-dom";
import useMovieCast from "../hooks/useMovieCast";
import useMovieVideos from "../hooks/useMovieVideos";
import Header from "./Header";

const MovieInfoContainer = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const info = useSelector((store) => store.movie.movieInfo);

  useMovieInfo(movieId);
  useMovieCast(movieId);
  useMovieVideos(movieId);
  return (
    <div>
      <Header />
      <MovieInfo info={info} />
      <MovieCast />
      <MovieVideos />
    </div>
  );
};

export default MovieInfoContainer;
