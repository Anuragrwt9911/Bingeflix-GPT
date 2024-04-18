import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovieCast } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieCast = (movieId) => {
  const dispatch = useDispatch();
  const getMovieCast = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addMovieCast(json));
  };

  useEffect(() => {
    getMovieCast();
  }, []);
};

export default useMovieCast;
