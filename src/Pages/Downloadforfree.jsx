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
        <div className="max-w-7xl mx-auto p-6 text-white">
            <h2 className="text-2xl font-bold mb-4">🎮 Download for Free</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {games.map((game) => (
                    <div
                        key={game.id}
                        className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-gray-800 to-gray-900 hover:scale-[1.03] transition duration-200"
                    >
                        <img
                            src={game.coverPhoto}
                            alt={game.title}
                            className="w-full h-44 object-cover"
                        />

                        {/* TOP TEXT SECTION */}
                        <div className="p-3">
                            <h2 className="mt-1 text-lg font-semibold">{game.title}</h2>
                            <p className="text-sm text-gray-400">{game.category}</p>
                        </div>

                        {/* BOTTOM SECTION */}
                        <div className="px-3 pb-4">
                            <p className="text-sm text-gray-300">{game.developer}</p>
                            <p className="text-sm text-gray-400 h-14 overflow-hidden">
                                {game.description}
                            </p>

                            <div className='flex justify-between items-center mt-4'>
                                <Link
                                    to={`/game/details/${game.id}`}
                                    className="block px-4 py-2 mb-2 rounded-lg bg-orange-400 text-gray-900 font-semibold hover:scale-105 text-center transition-transform hover:bg-orange-600"
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Downloadforfree;
