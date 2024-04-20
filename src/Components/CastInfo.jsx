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
    <div className="bg-black">
      <Header />
      <div className="mt-[80px] p-6 flex  mx-10 justify-center items-center font-[poppins]  text-white">
        <div className=" mr-10 ">
          <img
            className="h-80 w-80 rounded-[50%]"
            src={IMG_CDN_URL + castId?.profile_path}
          />
        </div>
        <div className="w-[70rem] ">
          <p className="text-5xl text-orange-600 font-extrabold hover:opacity-80 cursor-default my-3">
            {castId?.name}
          </p>

          <p className="mt-6">
            <span className="font-medium text-xl">known for : </span>{" "}
            {castId?.known_for_department}
          </p>
          <p className="">
            <span className=" font-medium text-xl my-2">birthday : </span>
            {castId?.birthday}
          </p>
          <p>
            <span className="font-medium  text-xl my-2">Place of Birth : </span>
            {castId?.place_of_birth}
          </p>
          <p>
            <span className="font-medium  text-xl my-2">Popularity : </span>
            {castId?.popularity}
          </p>
        </div>
      </div>
      <MovieByPerson personId={personId} name={castId?.name} />
    </div>
  );
};

export default CastInfo;
