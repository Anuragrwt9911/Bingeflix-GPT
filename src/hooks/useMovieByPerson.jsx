import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieByPerson } from "../utils/movieSlice";

const useMovieByPerson = (personId) => {
  const dispatch = useDispatch();
  const getMovieByPerson = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/person/${personId}/movie_credits`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieByPerson(json));
  };
  useEffect(() => {
    getMovieByPerson();
  }, []);
};

export default useMovieByPerson;
