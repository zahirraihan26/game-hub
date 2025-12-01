

import React, { useContext, useState } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import img from "../assets/user.png";
import { HiMenu, HiX } from "react-icons/hi";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handellogout = () => {
    logout()
      .then(() => {
        toast("Logout successfully ✅");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-black text-white py-4 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* 🔹 Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <IoGameControllerOutline className="text-3xl text-orange-500" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-gray-300 to-sky-400 bg-clip-text text-transparent">
            GameHub
          </h1>
        </Link>

        {/*  Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/*  Nav Link */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center md:space-x-6 absolute md:static bg-black md:bg-transparent left-0 w-full md:w-auto top-16 md:top-auto p-6 md:p-0 transition-all duration-300 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="hover:text-orange-400 font-medium mb-3 md:mb-0"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/games"
            className="hover:text-orange-400 font-medium mb-3 md:mb-0"
            onClick={() => setIsOpen(false)}
          >
            Games
          </Link>
          <Link
            to="/newsletter"
            className="hover:text-orange-400 font-medium mb-3 md:mb-0"
            onClick={() => setIsOpen(false)}
          >
            Newsletter
          </Link>
          <Link
            to="/myprofile"
            className="hover:text-orange-400 font-medium mb-3 md:mb-0"
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </Link>
          <Link
            to="/developers"
            className="hover:text-green-400 font-medium mb-3 md:mb-0"
            onClick={() => setIsOpen(false)}
          >
            Developers
          </Link>

            {/* Button */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-3 mt-4 md:mt-0">
            {user ? (
              <> 
                <div className="flex items-center space-x-3">
                  <Link to="/myprofile" onClick={() => setIsOpen(false)}>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-400">
                      <img
                        src={user.photoURL || img}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <button
                    onClick={() => {
                      handellogout();
                      setIsOpen(false);
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold mt-3 md:mt-0"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <> 
                <Link
                  to="/auth/login"
                  className="text-white font-medium hover:text-orange-400 mt-3 md:mt-0"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-semibold mt-3 md:mt-0"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div> 
      </div>
    </nav>
  );
};

export default Navbar; 
