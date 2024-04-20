import React from "react";
import useMovieByPerson from "../hooks/useMovieByPerson";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const MovieByPerson = ({ personId, name }) => {
  const moviesByActor = useSelector((store) => store.movie.movieByPerson);
  console.log(moviesByActor);
  useMovieByPerson(personId);

  if (!moviesByActor) return <Loader />;
  return (
    <div className="text-white font-[poppins]">
      <h1 className="text-4xl my-4  py-5 text-center  ">
        Discover Movies Starring
        <p className="text-orange-600 hover:text-orange-800 inline ml-3">
          {name}
        </p>
      </h1>

      <div className="grid grid-cols-4 grid-rows-3 gap-y-4 mx-10">
        {moviesByActor?.map((item) => {
          return (
            <Link to={"/overview/" + item?.id}>
              <div className="mx-10 hover:scale-110 cursor-pointer duration-300">
                <img
                  className=" rounded-xl "
                  src={IMG_CDN_URL + item?.poster_path}
                />
                <p className="my-4 font-bold text-sm text-center">
                  {item?.original_title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MovieByPerson;
