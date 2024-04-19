import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieVideos } from "../utils/movieSlice";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    dispatch(addMovieVideos(json.results));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieVideos;
