

import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/Authprovider";
import { Link } from "react-router";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";
// import { toast } from "react-toastify";



const ForgetPassword = () => {
  const { resetpass } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    


    resetpass(email)
      .then(() => {
        setMessage(" Password reset email sent! Check your inbox.");
        setError("");
         window.open("https://mail.google.com/mail/u/0/#inbox", "_blank"); 
      })
      .catch((err) => {
        setError(err.message);
        setMessage("");
      });
  };

  return (
       <div className="">

         <header>
            <Navbar></Navbar>
         </header>
         <main className='min-h-1/2 p-3 w-11/12 mx-auto'>
            <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold mb-4">Forgot Your Password</h1>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleReset} className="card-body">
            <fieldset className="fieldset space-y-3">
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {error && <p className="text-red-500 text-sm">{error}</p>}
              {message && <p className="text-green-600 text-sm">{message}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
               Forgot Password
              </button>

              <Link to="/auth/login" className="text-center text-blue-600 mt-4 hover:underline">
                Back to Login
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
         </main>
         <footer>
            <Footer></Footer>
         </footer>
    
    </div>
  );
};

export default ForgetPassword;
