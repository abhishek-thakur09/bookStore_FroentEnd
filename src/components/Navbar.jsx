import React,{useState} from "react";
import { useUser } from './UserContext';
import Header from "./Header";


const Navbar = () => {
        const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useUser();

//   console.log(user?.photoURL)

  if (!user) {
    return (
      <div className="p-4 text-red-600 font-semibold">
        You are not logged in.
      </div>
    );
  }


  return (
    <div className="flex justify-between items-center bg-gray-600 px-3 py-3 text-white cursor-pointer relative">
      <div>
        <Header />
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
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li className="flex gap-3 items-center">
            <p className="font-semibold">{user?.displayName}</p>
            <img
              className="h-10 w-10 rounded-full"
              src={user?.photoURL}
              alt="user"
            />
          </li>
        </ul>
      </div>

      {/* Dropdown Menu*/}
      {menuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-gray-700 rounded shadow-md md:hidden z-50">
          <ul className="flex flex-col p-4 gap-3">
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li className="flex gap-2 items-center">
              <p className="font-semibold">{user?.displayName}</p>
              <img
                className="h-8 w-8 rounded-full"
                src={user?.photoURL}
                alt="user"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
