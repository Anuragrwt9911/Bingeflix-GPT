import React from "react";
import { useParams } from "react-router-dom";

const Overview = () => {
  const { movieId } = useParams();
  console.log(movieId);

  return <div></div>;
};

export default Overview;
