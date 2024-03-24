import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="  px-6 text-white ">
      <h1 className="text-3xl my-2 ">
        {title}
        <div className="w-full overflow-x-auto h-[15rem]">
          <div className="flex items-center p-2 ">
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
