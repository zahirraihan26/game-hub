import React from 'react';
import { FaGamepad, FaChessKnight, FaFistRaised, FaMapMarkedAlt, FaDragon } from "react-icons/fa";
import { GiPistolGun, GiSoccerBall, GiBroadsword, GiCarWheel, GiTreasureMap, GiCrosshair } from "react-icons/gi";

const categories = [
  { icon: <FaGamepad size={28} />, title: "Arcade" },
  { icon: <GiCrosshair size={28} />, title: "Shooter" },
  { icon: <GiBroadsword size={28} />, title: "Action" },
  { icon: <FaChessKnight size={28} />, title: "Strategy" },
  { icon: <GiSoccerBall size={28} />, title: "Sports" },
  { icon: <GiCarWheel size={28} />, title: "Racing" },
  { icon: <GiPistolGun size={28} />, title: "FPS" },
  { icon: <FaMapMarkedAlt size={28} />, title: "Adventure" },
  { icon: <GiTreasureMap size={28} />, title: "Open World" },
  { icon: <FaDragon size={28} />, title: "Fantasy" },
];

const Servises = () => {
  return (
    <div className=" max-w-7xl mx-auto p-6 ">

      {/* Left text section */}
      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl font-bold mb-4">
          Online Games at GameHub
        </h1>
        <p className="text-gray-300 leading-relaxed">
          GameHub features the latest and best free online games. You can enjoy playing fun games 
          without interruptions from downloads, intrusive ads, or pop-ups. Just load up your 
          favorite games instantly in your web browser and enjoy!
        </p>
        <button className="mt-4 text-blue-400 hover:underline">
          Learn more
        </button>
      </div>

      {/* Right grid category section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {categories.map((item, i) => (
          <div key={i} className="bg-[#12121b] hover:bg-[#1b1b27] hover:scale-[1.04] transition cursor-pointer rounded-xl flex flex-col items-center justify-center py-5 shadow-sm">
            <div className="mb-2">{item.icon}</div>
            <p className="font-medium">{item.title}</p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Servises;
