

import React, { useContext } from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
import { AuthContext } from "../Provider/Authprovider";
import { Link } from "react-router-dom";

const Myprofile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* Header */}
      <header>
        <Navbar />
      </header> 
      {/* Main */}
      <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-base-200">
        <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>

        {user ? (
          <div className="card w-full max-w-sm bg-base-100 shadow-2xl p-6 rounded-2xl text-center">
            {/* Profile Photo */}
            <div className="avatar flex justify-center mb-4">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User"
                />
              </div>
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-semibold mb-2">
              {user.displayName || "No Name Found"}
            </h2>
            <p className="text-gray-500 mb-6">
              {user.email || "No Email Found"}
            </p>

            {/* Update Button */}
            <Link
              to="/profileupdate"
              className="btn btn-primary w-full text-white"
            >
              Update Profile
            </Link>
          </div>
        ) : (
          <p className="text-center text-lg text-red-700 mt-10">
            No user is logged in. 
          </p>
        )}
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Myprofile;

