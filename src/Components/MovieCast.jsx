import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCast = () => {
  const moviecast = useSelector((store) => store.movie.movieCast);
  console.log(moviecast);

  return (
    <div className="pt-32  bg-black text-white font-[poppins] ">
      <span className="text-orange-600 text-4xl ml-12 font-bold">Top Cast</span>
      <div className="  mt-6 mx-10 flex gap-4  overflow-x-scroll">
        {moviecast &&
          moviecast?.cast.map((item) => {
            return (
              <Link to={"/cast/" + item?.id}>
                <div
                  className="flex flex-col  cursor-pointer  min-w-[150px] items-center border border-solid border-black"
                  key={item?.id}
                >
                  {item?.profile_path ? (
                    <img
                      className="h-[190px] w-[150px] object-cover rounded-lg"
                      src={IMG_CDN_URL + item?.profile_path}
                      alt={item?.name}
                    />
                  ) : (
                    <img
                      className="h-[190px] w-[150px] object-contain rounded-lg"
                      src="https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0"
                      alt={item?.name}
                    />
                  )}
                  <div className="my-4 text-center">
                    <p className="font-bold text-sm">{item?.name}</p>
                    <p className="font-normal text-sm">{item?.character}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MovieCast;
