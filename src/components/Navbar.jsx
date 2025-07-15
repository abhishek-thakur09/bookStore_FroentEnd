import React, { useState } from "react";
import { useUser } from "./UserContext";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  //   console.log(user?.photoURL)


  const Logout = ()=>{
      navigate("/")
  }

  if (!user) {
    return (
      <div className="p-4 text-red-600 font-semibold">
        You are not logged in.
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center cursor-pointer bg-gray-600 px-3 py-7 text-white relative">
      <div>
        <Link to="/home"  className="flex items-center" > <Header /></Link>
      </div>

      {/* SVG BUTTON */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* List of items */}
      <div className="hidden md:flex">
        <ul className="flex gap-4 items-center">
            <Link to="/about">
            <li>About</li>
            </Link>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li className="flex gap-3 items-center">
            <p className="font-semibold">{user?.displayName}</p>
            <img
              className="h-10 w-10 rounded-full"
              src={user?.photoURL}
              alt="user"
            />
          </li>
          <li onClick={Logout}>Logout</li>
        </ul>
      </div>

      {/* Dropdown Menu*/}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-700 rounded shadow-md md:hidden z-50">
          <ul className="flex flex-col p-4 gap-3">
            <li>
              <Link to="/about">About</Link>
              </li>
            <li>
              <Link to="/contactus">
               Contact Us
              </Link>
             </li>
            <li>
              <Link to="/blog">
              Blog
              </Link>
              </li>
            <li className="flex gap-2 items-center">
              <p className="font-semibold">{user?.displayName}</p>
              <img
                className="h-8 w-8 rounded-full"
                src={user?.photoURL}
                alt="user"
                />
            </li>
                <li onClick={Logout}>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
