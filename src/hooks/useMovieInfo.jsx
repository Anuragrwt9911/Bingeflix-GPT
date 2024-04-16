import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieInfo } from "../utils/movieSlice";

const useMovieInfo = (movieId) => {
  const dispatch = useDispatch();
  const getMovieInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addMovieInfo(json));
  };
  useEffect(() => {
    getMovieInfo();
  }, []);
};

export default useMovieInfo;
