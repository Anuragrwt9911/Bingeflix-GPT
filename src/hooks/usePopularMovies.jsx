import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  //extracting fetching movies logic in this hook
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
