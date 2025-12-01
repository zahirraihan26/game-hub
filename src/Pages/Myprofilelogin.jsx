


import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
        toast(" Profile updated successfully!");
        navigate("/myprofile"); 
      })
      .catch((err) => {
        console.error(err);
        toast(" Failed to update profile: " + err.message);
      });
  };

  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold p-2">Update Your Account</h1>

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleUpdate} className="card-body">
          <fieldset className="fieldset">
        
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter new name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="label">Photo</label>
            <input
              type="text"
              className="input"
              placeholder="Enter photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />

            <button type="submit" className="btn btn-neutral mb-2 mt-4">
              Update
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Myprofilelogin;
