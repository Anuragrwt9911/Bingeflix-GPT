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
      <h1 className="cursor-default md:text-3xl md:font-normal text-xl font-bold my-4">
        {title}
      </h1>

      <div className=" flex duration-300  md:overflow-x-hidden overflow-x-scroll  ">
        <div className="hover:transform ease-in duration-200  flex items-center p-1 md:group ">
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
            className="hidden  group-hover:block left-4 right-10 top-[30%]
           w-full absolute z-40 text-black "
          >
            <button
              onClick={handlePreviousMovie}
              className="-ml-8 bg-slate-300 rounded-full px-4 py-3 hover:opacity-80   text-xl font-extrabold mr-[88vw]"
            >
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button
              onClick={handleNextMovie}
              className="fixed right-0 top-[30%] md:mr-24 mr-[73%] bg-slate-300   rounded-full px-4 py-3  hover:opacity-80 text-xl font-extrabold  "
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          ) )
        </div>
      </div>
    </div>
  );
};

export default MovieList;
