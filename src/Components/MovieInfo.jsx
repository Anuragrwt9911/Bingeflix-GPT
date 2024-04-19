import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { BANNER_IMG_CDN_URL, IMG_CDN_URL } from "../utils/constants";
import useMovieInfo from "../hooks/useMovieInfo";
import Header from "./Header";

const MovieInfo = ({ info }) => {
  const releaseYear = info?.release_date.slice(0, 4);

  const formatRuntime = (minutes) => {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${remainingMinutes}m`;
    } else {
      return `${remainingMinutes}m`;
    }
  };
  if (!info) return <Loader />;

  return (
    <div className=" relative z-30  h-full flex font-[poppins] items-center justify-between bg-black text-white ">
      <div className="h-full w-[76rem] opacity-75 absolute  top-0 left-0 z--20">
        <img
          className=" h-full w-full rounded-md  object-cover  "
          src={BANNER_IMG_CDN_URL + info?.backdrop_path}
        />
      </div>

      <div className="relative z-30 h-full w-[42rem] mr-10">
        <img
          className="size-96 rounded-md  object-cover mx-10 "
          src={IMG_CDN_URL + info?.poster_path}
        />
      </div>
      <div className="relative z-30 flex flex-col mx-10 my-10">
        <div className="my-8 flex  w-full">
          <p className="text-6xl font-[800] hover:text-gray-300 cursor-default   ">
            {info?.title}
          </p>
          <p className="font-light text-4xl ml-2 py-2  ">({releaseYear}) </p>
        </div>

        <p className="">
          <span className=" ">Popularity : </span>
          {info?.popularity}
        </p>
        {info?.tagline && (
          <p>
            <span>Tagline : </span>
            {info?.tagline}
          </p>
        )}

        <p>Duration : {formatRuntime(info?.runtime)}</p>
        <p>
          <span>Country</span> : {info?.origin_country}
        </p>
        <div className="my-4 ">
          <span className="  text-xl font-bold ">Overview </span>
          <p className="my-2">{info?.overview}</p>
        </div>
        <div className="flex items-center ">
          {" "}
          <span className="font-bold text-xl ">Genres </span>
          {info?.genres.map((item, index) => (
            <p
              className="mx-2  border-2 hover:text-orange-500 cursor-default border-orange-400 rounded-xl px-4 py-2"
              key={info?.id}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
