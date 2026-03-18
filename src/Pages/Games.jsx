import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FaArrowDown } from 'react-icons/fa';
import Loading from './Loading';

const Games = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/game.json")
            .then((res) => res.json())
            .then((data) => {
                const sortedGames = data.sort((a, b) => b.ratings - a.ratings);
                setGames(sortedGames);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="relative min-h-screen pt-24 pb-20">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -z-10"></div>

            <div className="max-w-7xl mx-auto p-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-primary border border-primary/20">
                        Complete Library
                    </div>

                    <h2 className="text-5xl font-black text-gradient-primary italic tracking-tight">
                        ALL GAMES
                    </h2>

                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>

                    <p className="max-w-xl text-white/60 text-lg leading-relaxed pt-4">
                        Explore our entire collection of handpicked titles across all genres and platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {games.map((game) => (
                        <article
                            key={game.id}
                            className="rounded-2xl overflow-hidden glass border border-white/5 text-white transition-all hover:scale-105 hover:-translate-y-2 hover:neon-border group flex flex-col h-full"
                        >
                            <div className="relative overflow-hidden h-48 shrink-0">
                                <img
                                    src={game.coverPhoto}
                                    alt={game.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                                <div className="absolute top-3 left-3 glass px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                                    {game.category}
                                </div>

                                <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-sm flex items-center gap-1.5 backdrop-blur-md">
                                    <span className="text-accent">⭐</span>
                                    <span className="font-bold">{game.ratings}</span>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                    {game.title}
                                </h3>

                                <p className="text-xs text-white/50 mb-4 font-medium uppercase tracking-widest line-clamp-1">
                                    {game.developer}
                                </p>

                                <p className="text-sm text-white/70 flex-grow mb-6 line-clamp-3 leading-relaxed">
                                    {game.description}
                                </p>

                                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-white/5">
                                    <Link
                                        to={`/game/details/${game.id}`}
                                        className="flex-1 text-center py-2.5 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all font-bold text-sm"
                                    >
                                        View Details
                                    </Link>

                                    <a
                                        href={game.downloadLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        title="Download"
                                        className="inline-flex items-center justify-center w-11 h-11 shrink-0 rounded-xl glass border border-white/10 hover:border-primary/50 hover:text-primary transition-all group/btn"
                                    >
                                        <FaArrowDown className="text-lg transition-transform group-hover/btn:translate-y-1" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Games;