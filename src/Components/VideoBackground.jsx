import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className=" p-0 w-full md:pt-0 h-full">
      <iframe
        className=" md:aspect-video  h-[28rem]  w-full"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
