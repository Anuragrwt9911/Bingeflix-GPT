import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className=" p-2 ">
      <div className="  flex  overflow-x-scroll ">
        <h1 className="text-4xl py-4 font-bold">
          {title}
          <div className="flex ">
            {/**mapping all posters in the movies api */}

            {movies &&
              movies.map((movie) => (
                <MovieCards
                  key={movie.poster_path}
                  posterPath={movie.poster_path}
                />
              ))}
          </div>
        </h1>
      </div>
    </div>
  );
};

export default MovieList;
