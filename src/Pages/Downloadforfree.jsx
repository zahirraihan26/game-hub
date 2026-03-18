import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router';

const Downloadforfree = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("/game.json")
            .then((res) => res.json())
            .then((data) => {
                const freeGames = data.filter(game => game.price === "Free");
                setGames(freeGames.slice(0, 8));
            });
    }, []);

    return (
        <div className="relative max-w-7xl mx-auto p-6 pt-24 pb-16">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full -z-10 -translate-y-1/2"></div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="space-y-3">
                    <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-accent border border-accent/20">
                        Free to Play
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                        DOWNLOAD FOR FREE
                    </h2>
                </div>
                <Link to="/games" className="text-primary hover:text-white transition-colors font-bold text-sm tracking-widest uppercase flex items-center gap-2 group">
                    View All Free Games
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="rounded-2xl overflow-hidden glass border border-white/5 text-white transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/20 group flex flex-col h-full"
                    >
                        <div className="relative overflow-hidden h-48 shrink-0">
                            <img
                                src={game.coverPhoto}
                                alt={game.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
                            <div className="absolute top-3 right-3 bg-gradient-to-r from-accent to-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg shadow-accent/20">
                                FREE
                            </div>
                            
                            <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold mb-1 leading-tight line-clamp-2">{game.title}</h3>
                                <p className="text-xs text-white/60 font-medium uppercase tracking-widest">{game.category}</p>
                            </div>
                        </div>

                        <div className="p-5 flex flex-col flex-grow bg-white/[0.02]">
                            <p className="text-sm text-white/50 mb-4 font-medium uppercase tracking-widest">{game.developer}</p>
                            <p className="text-sm text-white/70 flex-grow mb-6 line-clamp-2 leading-relaxed">
                                {game.description}
                            </p>

                            <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                                <Link
                                    to={`/game/details/${game.id}`}
                                    className="flex-1 text-center py-2.5 rounded-xl border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all font-bold text-sm text-white/90"
                                >
                                    Details
                                </Link>
                                <a
                                    href={game.downloadLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Download"
                                    className="inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-xl glass border border-accent/30 text-accent hover:bg-accent hover:text-white transition-all group/btn shadow-[0_0_15px_rgba(0,212,255,0.15)] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
                                >
                                    <FaArrowDown className="text-lg transition-transform group-hover/btn:translate-y-1" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Downloadforfree;
