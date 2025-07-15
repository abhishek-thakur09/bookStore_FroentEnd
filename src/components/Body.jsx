import React from "react";
import Login from "./Login";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import About from "./About";
import Layout from "./Layout";
import Blog  from "./Blog"
import Contact from "./Contact";



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
    {
      path:"/",
      element:<Layout/>,
      children:[
        {path: "home", element: <Home/>},
        {path: "about", element: <About/>},
        {path: "blog", element: <Blog/>},
        {path: "contactus",  element: <Contact/>},
      ]
    },

  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
