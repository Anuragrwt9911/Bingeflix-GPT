import React from "react";
import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";

const MovieVideos = () => {
  const movieVideos = useSelector((store) => store.movie.movieVideos);
  console.log(movieVideos);
  if (!movieVideos || movieVideos.length === 0) return null;

  return (
    <div className="bg-black py-1 md:px-14 px-10 font-[poppins]">
      <div className="md:mb-5 mb-3 pt-4">
        <span className="text-white text-4xl ">Videos</span>
      </div>
      <div className="my-5">
        <div className="flex flex-row gap-10 overflow-x-scroll">
          {movieVideos.map((movieVideo) => (
            <div key={movieVideo?.key} className=" w-full md:w-auto">
              <iframe
                className="w-[270px] h-[250px] md:w-[560px] md:h-[315px]"
                src={
                  "https://www.youtube-nocookie.com/embed/" + movieVideo?.key
                }
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieVideos;
