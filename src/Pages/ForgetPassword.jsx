

import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/Authprovider";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center relative py-20 px-4 md:px-0 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full -z-10"></div>

        <div className="flex flex-col items-center mb-8 animate-slide-up">
          <h1 className="text-4xl font-black text-gradient-primary mb-2">Reset Password</h1>
          <p className="text-white/60 text-center max-w-sm">
            Enter the email address associated with your PlayVerse account 
            to receive a password reset link.
          </p>
        </div>

        <div className="glass-dark w-full max-w-md rounded-[2rem] p-8 md:p-10 shadow-2xl border border-white/10 relative z-10 animate-slide-up hover:border-white/20 transition-all duration-300">
          <form onSubmit={handleReset} className="space-y-6">
            <div>
              <label className="label-premium">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-premium" 
                placeholder="Enter your email" 
                required 
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-xl flex items-center gap-2">
                <span>⚠</span> {error}
              </div>
            )}
            
            {message && (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 text-sm p-3 rounded-xl flex items-center gap-2">
                <span>✓</span> {message}
              </div>
            )}

            <button type="submit" className="btn-premium w-full py-4 text-lg mt-4">
              Send Reset Link
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink-0 mx-4 text-white/40 text-sm font-medium">OR</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <button 
              type="button"
              onClick={() => window.open("https://mail.google.com/", "_blank")}
              className="w-full glass py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center gap-2 text-white/80 hover:text-white"
            >
              Open Gmail
            </button>

            <div className="text-center pt-2">
              <Link to="/auth/login" className="text-primary hover:text-white font-semibold text-sm transition-colors">
                ← Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
