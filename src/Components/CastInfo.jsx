import React from "react";
import { useParams } from "react-router-dom";
import useCastInfo from "../hooks/useCastInfo";
import Header from "./Header";
import { IMG_CDN_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import MovieByPerson from "./MovieByPerson";
import Loader from "./Loader";

const CastInfo = () => {
  const { personId } = useParams();
  console.log(personId);
  const castId = useSelector((store) => store.movie.castInfo);
  console.log(castId);
  useCastInfo(personId);

  if (!castId) return <Loader />;

  return (
    <div className="bg-black ">
      <Header />
      <div className=" mt-[70px] md:mt-[80px] p-0 md:p-6 flex mx-6 md:mx-14 justify-center items-center font-[poppins]  text-white text-lg">
        <div className="min-w-[8rem] mr-4 md:mr-10 ">
          <img
            className="md:h-80 md:w-80 h-40 w-full rounded-[50%]"
            src={IMG_CDN_URL + castId?.profile_path}
          />
        </div>
        <div className="w-[70rem] ">
          <p className="text-3xl md:text-5xl text-orange-600 font-extrabold hover:opacity-80 cursor-default my-3">
            {castId?.name}
          </p>

          <p className="mt-4 md:mt-6">
            <span className="font-medium text-lg md:text-xl">known for : </span>{" "}
            {castId?.known_for_department}
          </p>
          <p className="">
            <span className=" font-medium text-lg md:text-xl my-2">
              birthday :{" "}
            </span>
            {castId?.birthday}
          </p>
          <p>
            <span className="font-medium text-lg md:text-xl my-2">
              Place of Birth :{" "}
            </span>
            {castId?.place_of_birth}
          </p>
          <p>
            <span className="font-medium text-lg md:text-xl my-2">
              Popularity :{" "}
            </span>
            {castId?.popularity}
          </p>
        </div>
      </div>
      <MovieByPerson personId={personId} name={castId?.name} />
    </div>
  );
};

export default CastInfo;
