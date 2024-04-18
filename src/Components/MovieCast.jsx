import React, { Profiler } from "react";
import { useSelector } from "react-redux";
import { BANNER_IMG_CDN_URL, IMG_CDN_URL } from "../utils/constants";

const MovieCast = () => {
  const moviecast = useSelector((store) => store.movie.movieCast);
  console.log(moviecast);

  return (
    <div className=" pt-8 w-full bg-black text-white font-[poppins] ">
      <span className=" text-5xl ml-12 font-[400]">Cast</span>
      <div className="mt-6 mx-10 flex gap-4  overflow-x-scroll">
        {moviecast &&
          moviecast?.cast.map((item) => {
            return (
              <div
                className="flex flex-col   min-w-[150px] items-center border border-solid border-black"
                key={item?.id}
              >
                <img
                  className="h-[200px] w-[150px] object-cover rounded-lg"
                  src={IMG_CDN_URL + item?.profile_path}
                  alt="moviecast"
                />
                <div className="my-4 text-center">
                  <p className="font-bold text-sm">{item?.name}</p>
                  <p className="font-normal text-sm">{item?.character}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieCast;
