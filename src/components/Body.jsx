import React from "react";
import Login from "./Login";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";



const Body = () => {

  const appRouter = createBrowserRouter([
    {
       path: "/", 
       element: <Login />
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
