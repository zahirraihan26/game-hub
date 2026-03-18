import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Developers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-6 py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full -z-10"></div>

        <div className="flex flex-col items-center text-center space-y-4 mb-16 animate-slide-up max-w-3xl">
          <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-primary border border-primary/20">
            The Team
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gradient-primary tracking-tight">
            MEET THE DEVELOPERS
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-white/60 text-lg leading-relaxed pt-4">
            GameHub is powered by a passionate team of indie game creators and developers
            from around the world. Discover who's behind your favorite platform!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full z-10">
          {[
            {
              name: "Rakib Hassan",
              role: "Lead Game Designer",
              img: "https://i.ibb.co.com/fzBXnDM6/612467302-122098275855204152-450226571964542052-n.jpg",
              color: "primary"
            },
            {
              name: "Abdullahal Shafi",
              role: "Frontend Developer",
              img: "https://i.ibb.co.com/wh0HWzDg/499928082-707433948343599-8738779232707403970-n.jpg",
              color: "secondary"
            },
            {
              name: "Sadman Farazi",
              role: "Backend Engineer",
              img: "https://i.ibb.co.com/gZbgnkTq/604776255-1188980826700151-5105081073829710808-n.jpg",
              color: "accent"
            }
          ].map((dev, i) => (
            <div key={i} className="glass-dark border border-white/5 rounded-[2rem] p-8 hover:border-white/20 transition-all duration-300 group shadow-xl hover:-translate-y-2 flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-${dev.color}/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className={`w-32 h-32 rounded-full p-1 bg-gradient-to-br from-${dev.color} to-transparent shadow-lg bg-[length:200%_200%] bg-[0%_0%] group-hover:bg-[100%_100%] transition-all duration-500`}>
                  <img
                    src={dev.img}
                    alt={dev.name}
                    className="w-full h-full rounded-full object-cover border-4 border-[#0b0b13] bg-[#0b0b13] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-colors">
                {dev.name}
              </h2>
              <p className={`text-${dev.color} text-sm font-bold tracking-widest uppercase mb-6`}>{dev.role}</p>

              <div className="flex items-center gap-4 text-white/40">
                <a href="#" className="hover:text-white hover:-translate-y-1 transition-all"><FaGithub size={20} /></a>
                <a href="#" className="hover:text-[#1DA1F2] hover:-translate-y-1 transition-all"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-[#0A66C2] hover:-translate-y-1 transition-all"><FaLinkedin size={20} /></a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Developers;
