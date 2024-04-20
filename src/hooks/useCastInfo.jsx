import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCastInfo } from "../utils/movieSlice";

const useCastInfo = (personId) => {
  const dispatch = useDispatch();
  const getCastInfo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/person/${personId}`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addCastInfo(json));
  };
  useEffect(() => {
    getCastInfo();
  }, []);
};

export default useCastInfo;
