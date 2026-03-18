import React from 'react';
import { FaGamepad, FaChessKnight, FaFistRaised, FaMapMarkedAlt, FaDragon } from "react-icons/fa";
import { GiPistolGun, GiSoccerBall, GiBroadsword, GiCarWheel, GiTreasureMap, GiCrosshair } from "react-icons/gi";
import { Link } from 'react-router';

const categories = [
  { icon: <FaGamepad className="text-3xl text-primary" />, title: "Arcade" },
  { icon: <GiCrosshair className="text-3xl text-secondary" />, title: "Shooter" },
  { icon: <GiBroadsword className="text-3xl text-accent" />, title: "Action" },
  { icon: <FaChessKnight className="text-3xl text-primary" />, title: "Strategy" },
  { icon: <GiSoccerBall className="text-3xl text-secondary" />, title: "Sports" },
  { icon: <GiCarWheel className="text-3xl text-accent" />, title: "Racing" },
  { icon: <GiPistolGun className="text-3xl text-primary" />, title: "FPS" },
  { icon: <FaMapMarkedAlt className="text-3xl text-secondary" />, title: "Adventure" },
  { icon: <GiTreasureMap className="text-3xl text-accent" />, title: "Open World" },
  { icon: <FaDragon className="text-3xl text-primary" />, title: "Fantasy" },
];

const Services = () => {
  return (
    <div className="relative max-w-7xl mx-auto p-6 py-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        {/* Left text section */}
        <div className="lg:w-1/3 space-y-6">
          <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-primary border border-primary/20">
            Play Instantly
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gradient-primary tracking-tight">
            ONLINE GAMES AT GAMEHUB
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <p className="text-white/70 leading-relaxed text-lg">
            GameHub features the latest and best free online games. You can enjoy playing fun games 
            without interruptions from downloads, intrusive ads, or pop-ups. Just load up your 
            favorite games instantly in your web browser and enjoy!
          </p>
          <div className="pt-4">
            <Link to="/gamehub" className="btn-premium inline-block px-8 py-3">
              Explore GameHub+
            </Link>
          </div>
        </div>

        {/* Right grid category section */}
        <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((item, i) => (
            <div 
              key={i} 
              className="glass border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 cursor-pointer rounded-2xl flex flex-col items-center justify-center py-6 shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:-translate-y-1 group"
            >
              <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {item.icon}
              </div>
              <p className="font-bold text-sm tracking-wide text-white/90 group-hover:text-white transition-colors">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
