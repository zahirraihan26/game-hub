


import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GameCard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedGames = data.sort((a, b) => b.ratings - a.ratings);
        setGames(sortedGames);
      });
  }, []); 

  const cardVariants = {
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">🎮 Top Rated Games</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {games.map((game) => (

          <motion.article
            key={game.id}
            variants={cardVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-800 to-gray-900 text-white"
          >
            <div className="relative">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-44 object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 rounded-full text-sm">
                {game.category}
              </div>
              <div className="absolute top-3 right-3 bg-black/60 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                ⭐ <span className="font-semibold">{game.ratings}</span>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{game.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{game.developer}</p>
              <p className="text-sm text-gray-400 h-14 overflow-hidden">
                {game.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
            
                <Link
                  to={`/game/details/${game.id}`}
                  className="px-4 py-2 rounded-lg bg-orange-400 text-gray-900 font-semibold hover:scale-105 transition-transform hover:bg-orange-600"
                >
                  View Details
                </Link>

               
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Download"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-400 hover:bg-orange-600 transition-colors"
                >
                  <FaArrowDown className="text-xl text-white" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default GameCard;


