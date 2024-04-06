import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie.trailerVideo);
  //fetch trailer vidoe

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    //this api contains many vidoes we need only trialer video
    //filter our trailer vidoe
    const filterData = json.results.filter((video) => video.type === "Trailer");

    //handling trailer if not found:
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    //dispatching an action to store the trailer video :
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
