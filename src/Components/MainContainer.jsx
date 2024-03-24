import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return; //if movies not present

  const mainMovie = movies[0]; //selecting one movie to dislay in main container
  console.log(mainMovie);

  const { original_title, overview, id } = mainMovie; //extractiong

  return (
    <div className="relative ">
      <VideoTitle title={original_title} overview={overview} />

      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
