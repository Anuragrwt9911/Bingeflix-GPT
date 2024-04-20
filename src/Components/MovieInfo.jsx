import React from "react";
import Loader from "./Loader";
import { BANNER_IMG_CDN_URL, IMG_CDN_URL } from "../utils/constants";

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
    <div className="md:top-20 top-16 relative z-30  h-full flex font-[poppins] items-center justify-evenly md:flex-row flex-col bg-black text-white ">
      <div className="h-full md:w-full w-[450px] opacity-70 absolute  top-0 left-0 z--20">
        <img
          className=" h-full w-full rounded-md  object-cover  "
          src={BANNER_IMG_CDN_URL + info?.backdrop_path}
        />
      </div>

      <div className="md:block  relative md:top-0 top-10 z-30 h-[10rem] md:h-[25rem] md:w-[30rem] w-[18rem] mx-8 ">
        <img
          className=" rounded-md h-full   object-cover  "
          src={IMG_CDN_URL + info?.poster_path}
        />
      </div>
      <div className="relative z-30 flex flex-col mr-10 my-10">
        <div className="my-8 flex  w-full">
          <p className="text-4xl md:text-6xl font-[600] md:font-[800]  hover:text-gray-300 cursor-default  ">
            {info?.title}
            <p className="inline font-light text-3xl md:text-4xl ml-1 md:ml-2 py-2 ">
              ({releaseYear})
            </p>
          </p>
        </div>

        {info?.tagline && (
          <p className="text-2xl my-2 font-light">"{info?.tagline}"</p>
        )}

        <p>
          Duration :{" "}
          <span className="font-bold"> {formatRuntime(info?.runtime)}</span>
        </p>
        <p>
          <span>Country</span> :{" "}
          <span className="font-bold">{info?.origin_country}</span>
        </p>
        <div className="my-4 ">
          <span className="  text-xl font-bold ">Overview </span>
          <p className="my-2">{info?.overview}</p>
        </div>
        <div className="flex items-center ">
          {" "}
          {info?.genres.map((item) => (
            <p
              className="mx-1 font-bold border hover:text-orange-500 cursor-default border-white rounded-full px-2 py-1 text-sm"
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
