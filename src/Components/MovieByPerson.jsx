import React from "react";
import useMovieByPerson from "../hooks/useMovieByPerson";

const MovieByPerson = ({ personId }) => {
  useMovieByPerson(personId);
  return <div>MovieByPerson</div>;
};

export default MovieByPerson;
