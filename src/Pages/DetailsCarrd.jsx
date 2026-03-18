import React from "react";
import { FaArrowDown, FaGlobe, FaYoutube, FaCalendarAlt, FaTag, FaUserAlt, FaDollarSign } from "react-icons/fa";
import { motion } from "framer-motion";

const DetailsCard = ({ detal = {} }) => {
  const {
    coverPhoto = "",
    title = "Unknown",
    category = "Unknown",
    ratings = 0,
    description = "No description available.",
    developer = "Unknown",
    downloadLink = "#",
    languages = [],
    platforms = [],
    releaseDate = "Unknown",
    price = "Free",
    genres = [],
    systemRequirements = {},
    screenshots = [],
    trailerLink = "#",
    multiplayerModes = [],
    achievements = [],
    website = "#",
    ageRating = "N/A",
  } = detal;

  return (
    <div className="space-y-12">
      {/* Hero Header Section */}
      <section className="glass-dark rounded-[3rem] overflow-hidden border border-white/5 relative">
        <div className="absolute inset-0 -z-10">
          <img src={coverPhoto} alt="" className="w-full h-full object-cover blur-2xl opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-base-100/50 via-base-100 to-base-100"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 p-8 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/3 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <img src={coverPhoto} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </motion.div>

          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <span className="glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-primary border border-primary/20">
                  {category}
                </span>
                <span className="glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-accent border border-accent/20">
                  {ageRating}
                </span>
              </div>
              <h1 className="text-6xl font-black tracking-tight">{title}</h1>
              <div className="flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <span className="text-accent text-xl">⭐</span>
                  <span className="text-white font-bold text-xl">{ratings}</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <FaUserAlt className="text-primary" />
                  <span className="font-medium">{developer}</span>
                </div>
              </div>
            </div>

            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              <div className="glass p-4 rounded-2xl border border-white/5">
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Release Date</p>
                <div className="flex items-center gap-2 font-bold">
                  <FaCalendarAlt className="text-primary" />
                  <span>{releaseDate}</span>
                </div>
              </div>
              <div className="glass p-4 rounded-2xl border border-white/5">
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Price</p>
                <div className="flex items-center gap-2 font-bold">
                  <FaDollarSign className="text-secondary" />
                  <span>{price}</span>
                </div>
              </div>
              <div className="glass p-4 rounded-2xl border border-white/5">
                <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Genres</p>
                <div className="flex items-center gap-2 font-bold truncate">
                  <FaTag className="text-accent" />
                  <span>{genres[0] || "Action"}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href={downloadLink} target="_blank" rel="noreferrer" className="btn-premium flex items-center gap-3 px-8 py-4 text-lg">
                <FaArrowDown /> Download Now
              </a>
              <a href={trailerLink} target="_blank" rel="noreferrer" className="glass flex items-center gap-3 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10 text-white">
                <FaYoutube className="text-red-500 text-xl" /> Watch Trailer
              </a>
              <a href={website} target="_blank" rel="noreferrer" className="glass flex items-center gap-3 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10 text-white">
                <FaGlobe className="text-primary text-xl" /> Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Screenshots */}
          {screenshots.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-4 text-white/90">
                SCREENS
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {screenshots.map((shot, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-2xl overflow-hidden border border-white/10 aspect-video shadow-xl"
                  >
                    <img src={shot} alt={`${title} screenshot ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* System Requirements */}
          {systemRequirements.minimum && (
            <section className="space-y-6">
              <h2 className="text-3xl font-black tracking-tight flex items-center gap-4 text-white/90">
                REQUIREMENTS
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
              </h2>
              <div className="glass-dark p-8 rounded-[2rem] border border-white/5 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Minimum</h3>
                  <p className="text-white/70 leading-relaxed font-mono text-sm">{systemRequirements.minimum}</p>
                </div>
                {systemRequirements.recommended && (
                  <div className="space-y-2 pt-6 border-t border-white/5">
                    <h3 className="text-accent font-bold uppercase tracking-widest text-sm">Recommended</h3>
                    <p className="text-white/70 leading-relaxed font-mono text-sm">{systemRequirements.recommended}</p>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="space-y-12">
          <section className="glass-dark p-8 rounded-[2rem] border border-white/5 space-y-8">
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {platforms.map((plat) => (
                  <span key={plat} className="glass px-3 py-1 rounded-lg text-xs font-bold border border-white/5">
                    {plat}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span key={lang} className="glass px-3 py-1 rounded-lg text-xs font-bold border border-white/5">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {multiplayerModes.length > 0 && (
              <div>
                <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Multiplayer</h3>
                <div className="flex flex-wrap gap-2">
                  {multiplayerModes.map((mode) => (
                    <span key={mode} className="glass px-3 py-1 rounded-lg text-xs font-bold border border-white/5 text-primary">
                      {mode}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
