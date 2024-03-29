import React, { useState } from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  const [startIndex, setStartIndex] = useState(0);
  const handleNextMovie = () => {
    if (startIndex + 7 < movies.length) {
      setStartIndex(startIndex + 2);
    }
  };
  const handlePreviousMovie = () => {
    if (startIndex - 2 >= 0) {
      setStartIndex(startIndex - 2);
    }
  };

  return (
    <div className="  px-6 text-white ">
      <h1 className="md:text-3xl md:font-normal text-xl font-bold my-2 ">
        {title}
        <div className=" flex duration-300  overflow-hidden  ">
          <div className="transform ease-in duration-200  flex items-center p-1 ">
            {/**mapping all posters in the movies api */}

            {movies &&
              movies
                .slice(startIndex, startIndex + 8)
                .map((movie) => (
                  <MovieCards
                    key={movie.poster_path}
                    posterPath={movie.poster_path}
                    movieName={movie.original_title}
                  />
                ))}
            {movies && (
              <div className="text-white left-4 right-10 w-full flex justify-between absolute z-40 ">
                <button
                  onClick={handlePreviousMovie}
                  className="-ml-8 bg-gradient-to-r from-black rounded-full px-4 py-3 opacity-100 text-xl font-extrabold "
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  onClick={handleNextMovie}
                  className="md:mr-24 mr-[73%] bg-gradient-to-r from-black  rounded-full px-4 py-3  opacity-100 text-xl font-extrabold "
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </h1>
    </div>
  );
};

export default MovieList;
