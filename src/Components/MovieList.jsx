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
    <div className="  md:px-6 px-2 text-white ">
      <h1 className="cursor-default md:text-3xl md:font-normal font-[poppins] text-xl font-bold  md:my-4 my-3">
        {title}
      </h1>

      <div className=" flex duration-300  md:overflow-x-hidden overflow-x-scroll  ">
        <div className="hover:transform ease-in duration-200  flex items-center p-1 group ">
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
          <div
            className="hidden group-hover:hidden md:group-hover:block left-4 right-10 top-[30%] text-white
           w-full absolute z-40  "
          >
            <button
              onClick={handlePreviousMovie}
              className="px-2 py-1  -ml-8 bg-black  rounded-full md:px-5 md:py-3    text-xl font-extrabold mr-[88vw]"
            >
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button
              onClick={handleNextMovie}
              className="px-2 py-1 fixed right-0 top-[30%] md:mr-24 mr-[73%] bg-black  rounded-full md:px-5 md:py-3   text-xl font-extrabold  "
            >
              <i class="fa-solid fa-angle-right"></i>
            </button>
          </div>
          ) )
        </div>
      </div>
    </div>
  );
};

export default MovieList;
