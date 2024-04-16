import React from "react";
import { useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { IMG_CDN_URL } from "../utils/constants";

const MovieInfo = () => {
  const { movieId } = useParams();
  console.log(movieId);
  useMovieInfo(movieId);

  const info = useSelector((store) => store.movie.movieInfo);

  if (!info) return <Loader />;

  return (
    <div className="h-full flex font-[poppins] items-center justify-between bg-black text-white ">
      <img
        className="size-96 rounded-md  object-cover mx-10 "
        src={IMG_CDN_URL + info?.poster_path}
      />
      <div className="flex flex-col mx-10 my-10 ">
        <div className="my-8 flex  w-full">
          <p className="text-6xl font-[800]  ">{info?.title}</p>
          <p className="font-bold">{info?.release_date} </p>
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

        <p>{info?.duration}</p>
        <p>
          <span>Country</span> : {info?.origin_country}
        </p>
        <div className="my-4 ">
          <span className="  text-xl font-bold ">Overview : </span>
          <p className="my-2">{info?.overview}</p>
        </div>
        <div className="flex items-center ">
          {" "}
          <span className="font-bold text-xl ">Genres : </span>
          {info?.genres.map((item, index) => (
            <p
              className="mx-4 border-2 hover:text-orange-500 cursor-default border-orange-400 rounded-xl px-4 py-2"
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
