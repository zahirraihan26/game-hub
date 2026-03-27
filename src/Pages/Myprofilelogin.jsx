


import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/Authprovider";
import { updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Myprofilelogin = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast("Profile updated successfully!");
        navigate("/myprofile"); 
      })
      .catch((err) => {
        console.error(err);
        toast("Failed to update profile: " + err.message);
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center relative py-20 px-4 md:px-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[120px] rounded-full -z-10"></div>

        <div className="flex flex-col items-center mb-8 animate-slide-up">
          <h1 className="text-4xl font-black text-gradient-primary mb-2">Edit Profile</h1>
          <p className="text-white/60">Update your PlayVerse identity</p>
        </div>

        <div className="glass-dark w-full max-w-md rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/10 relative z-10 animate-slide-up hover:border-white/20 transition-all duration-300">
          <form onSubmit={handleUpdate} className="space-y-6">
            <div>
              <label className="label-premium">Display Name</label>
              <input
                type="text"
                className="input-premium"
                placeholder="Enter new name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="label-premium">Avatar Image URL</label>
              <input
                type="text"
                className="input-premium"
                placeholder="Enter photo URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-premium w-full py-4 text-lg mt-4 shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              Save Changes
            </button>
          </form>

          <div className="text-center pt-8">
            <Link to="/myprofile" className="text-white/50 hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2">
              <span>←</span> Cancel and return to profile
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Myprofilelogin;
