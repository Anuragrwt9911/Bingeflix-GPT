import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  //subsribing to the store to get our slice of movies and geting the state where we stored our all nowPlayingMovies fromt the redux store.
  const movies = useSelector((store) => store.movie);
  return (
    <div className=" bg-black ">
      <div className="-mt-52  relative z-30">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

        <MovieList title={"Most Rated"} movies={movies.topRatedMovies} />

        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />

        <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
      {/**
    MovieList - Popular
        --all cards which are popular
    MovieList - NowPlaying
    MovieList - Trending
    MovieList -  */}
    </div>
  );
};

export default SecondaryContainer;
