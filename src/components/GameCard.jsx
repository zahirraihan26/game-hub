


import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GameCard = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/game.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedGames = data.sort((a, b) => b.ratings - a.ratings);
         const limitedGames = sortedGames.slice(0, 12);
        setGames(limitedGames);
        setLoading(false);
      });
  }, []); 

  const cardVariants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: { opacity: 0, scale: 0.95, y: 10 }
  };

  if (loading) {
    return (
        <div className="max-w-7xl mx-auto p-6 flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-white/10 border-t-primary rounded-full animate-spin"></div>
        </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">🎮 Top Rated Games</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.03 }}
      >
        {games.map((game) => (

          <motion.article
            key={game.id}
            variants={cardVariants}
            transition={{ duration: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -8 }}
            className="rounded-2xl overflow-hidden glass border border-white/5 text-white transition-all hover:neon-border group"
          >
            <div className="relative overflow-hidden">
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                {game.category}
              </div>
              <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-sm flex items-center gap-1.5 backdrop-blur-md">
                <span className="text-accent">⭐</span> <span className="font-bold">{game.ratings}</span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{game.title}</h3>
              <p className="text-xs text-white/50 mb-4 font-medium uppercase tracking-widest">{game.developer}</p>
              <p className="text-sm text-white/70 h-16 overflow-hidden leading-relaxed">
                {game.description}
              </p>

              <div className="mt-6 flex items-center justify-between gap-3">
                <Link
                  to={`/game/details/${game.id}`}
                  className="flex-1 text-center py-2.5 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all font-bold text-sm"
                >
                  Details
                </Link>
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Download"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl glass border border-white/10 hover:border-primary/50 hover:text-primary transition-all"
                >
                  <FaArrowDown className="text-lg" />
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


