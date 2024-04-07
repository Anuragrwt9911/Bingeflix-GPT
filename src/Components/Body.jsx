import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import TVList from "./TVList";

const Body = () => {
  //creating routing configuration for body

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
      path: "/tvshows",
      element: <TVList />,
    },
  ]);

  return (
    <div className="w-full">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
