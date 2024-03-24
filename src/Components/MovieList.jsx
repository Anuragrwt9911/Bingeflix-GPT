import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className=" bg-black px-6 ">
      <h1 className="text-4xl py-4 font-bold">
        {title}
        <div className="w-full overflow-x-scroll">
          <div className="flex items-center ">
            {/**mapping all posters in the movies api */}

            {movies &&
              movies.map((movie) => (
                <MovieCards
                  key={movie.poster_path}
                  posterPath={movie.poster_path}
                />
              ))}
          </div>
        </div>
      </h1>
    </div>
  );
};

export default MovieList;
