import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useMoviesData = () => {
  //extracting fetching movies logic in this hook
  const dispatch = useDispatch();
  //subscribing to store
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovies);

  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    //if nowplayingmovies is not fetched in the redux store then only make an api call for fetching that movies otherwise use the stored items in redux-store.
    !nowPlayingMovies && getMovieData();
  }, []);
};

export default useMoviesData;
