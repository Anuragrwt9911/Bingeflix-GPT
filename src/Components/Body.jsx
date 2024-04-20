import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MovieInfoContainer from "./MovieInfoContainer";
import CastInfo from "./CastInfo";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/home",
      element: <Browse />,
    },

    {
      path: "/overview/:movieId",
      element: <MovieInfoContainer />,
    },
    {
      path: "/cast/:personId",
      element: <CastInfo />,
    },
  ]);

  return (
    <div className=" md:w-full  w-[450px]">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
