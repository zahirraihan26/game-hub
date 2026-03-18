

import React, { useContext, useState } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/Authprovider";
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
    <nav className="glass-dark border-b border-white/5 text-white py-4 shadow-2xl sticky w-full z-50 top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* 🔹 Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <IoGameControllerOutline className="text-3xl text-primary transition-transform group-hover:rotate-12" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            GameHub
          </h1>
        </Link>

        {/*  Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-primary focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/*  Nav Link */}
        <div
          className={`flex-col md:flex-row md:flex md:items-center md:space-x-8 absolute md:static glass-dark md:bg-transparent left-0 w-full md:w-auto top-[72px] md:top-auto p-6 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? "flex opacity-100 translate-y-0" : "hidden md:flex opacity-0 md:opacity-100 -translate-y-4 md:translate-y-0"
            }`}
        >
          <Link
            to="/"
            className="hover:text-primary transition-colors font-medium mb-4 md:mb-0 relative group"
            onClick={() => setIsOpen(false)}
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/games"
            className="hover:text-primary transition-colors font-medium mb-4 md:mb-0 relative group"
            onClick={() => setIsOpen(false)}
          >
            Games
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/newsletter"
            className="hover:text-primary transition-colors font-medium mb-4 md:mb-0 relative group"
            onClick={() => setIsOpen(false)}
          >
            Newsletter
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          <Link
            to="/gamehub"
            className="hover:text-primary transition-colors font-medium mb-4 md:mb-0 relative group"
            onClick={() => setIsOpen(false)}
          >
            Gamehub+
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </Link>
          {
            user && (
              <Link
                to="/myprofile"
                className="hover:text-primary transition-colors font-medium mb-4 md:mb-0 relative group"
                onClick={() => setIsOpen(false)}
              >
                My Profile
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            )
          }
          <Link
            to="/developers"
            className="hover:text-accent transition-colors font-medium mb-4 md:mb-0 relative group"
            onClick={() => setIsOpen(false)}
          >
            Developers
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
          </Link>

          {/* Button */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-6 md:mt-0">
            {user ? (
              <>
                <div className="flex items-center space-x-4">
                  <Link to="/myprofile" onClick={() => setIsOpen(false)}>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/50 hover:border-primary transition-colors">
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
                    className="btn-premium"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="text-white font-medium hover:text-primary transition-colors mt-4 md:mt-0"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn-premium"
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
