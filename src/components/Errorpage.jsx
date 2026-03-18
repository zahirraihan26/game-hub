import React from 'react';
import errorimg from "../assets/404-illustration (1).jpg";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden px-4">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 blur-[150px] rounded-full -z-10"></div>

      <div className="glass-dark border border-white/10 rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center max-w-2xl shadow-2xl animate-float">
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <img
            src={errorimg}
            alt="404 Error"
            className="w-[300px] md:w-[400px] max-w-full rounded-3xl shadow-xl relative z-10"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black text-gradient-primary mb-4 tracking-tight">System Glitch!</h1>
        <p className="text-lg mb-8 text-white/60 font-medium">
          The requested level could not be found or has been removed from the server.
        </p>
        
        <Link
          to="/"
          className="btn-premium px-10 py-4 text-lg w-full sm:w-auto shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] flex items-center justify-center gap-3"
        >
          <span>←</span> Return to Base
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;