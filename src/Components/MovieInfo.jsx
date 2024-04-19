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
    <div className="md:top-20 top-16 relative z-30  h-full flex font-[poppins] items-center justify-between md:flex-row flex-col bg-black text-white ">
      <div className="h-full md:w-[76rem] w-[450px] opacity-75 absolute  top-0 left-0 z--20">
        <img
          className=" h-full w-full rounded-md  object-cover  "
          src={BANNER_IMG_CDN_URL + info?.backdrop_path}
        />
      </div>

      <div className="md:block flex justify-center items-center relative md:top-0 top-10 z-30 h-[18rem] md:h-full md:w-[42rem] w-[18rem] mr-10">
        <img
          className="size-96 h-full rounded-md  object-cover mx-10 "
          src={IMG_CDN_URL + info?.poster_path}
        />
      </div>
      <div className="relative z-30 flex flex-col mx-10 my-10">
        <div className="my-8 flex  w-full">
          <p className="text-4xl md:text-6xl font-[600] md:font-[800]  hover:text-gray-300 cursor-default  ">
            {info?.title}
          </p>
          <br></br>
          <p className="font-light text-3xl md:text-4xl ml-1 md:ml-2 py-2 ">
            ({releaseYear}){" "}
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
          {info?.genres.map((item, index) => (
            <p
              className="mx-1  border hover:text-orange-500 cursor-default border-white rounded-full px-2 py-1 text-sm"
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
