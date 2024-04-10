import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className=" w-full md:pt-0 ">
      {/* Assuming this is React JSX code */}
      <video
        className="aspect-video overflow-hidden bg-gradient-to-r from-black w-full"
        controls
        autoPlay
        muted
      >
        <source
          src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?autoplay=1&loop=1&mute=1&playlist=${trailerVideo?.key}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
