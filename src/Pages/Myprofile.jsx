

import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../providers/Authprovider";
import { Link } from "react-router-dom";

const Myprofile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex justify-center items-center py-20 px-4 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full -z-10"></div>

                {user ? (
                    <div className="w-full max-w-xl glass-dark border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative z-10 animate-slide-up">
                        {/* Header Banner */}
                        <div className="h-40 bg-gradient-to-r from-primary via-secondary to-accent relative">
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        </div>

                        {/* Profile Info */}
                        <div className="px-8 pb-10 relative">
                            {/* Avatar */}
                            <div className="flex justify-center -mt-20 mb-6">
                                <div className="relative group">
                                    <div className="w-36 h-36 rounded-full p-1.5 bg-gradient-to-br from-primary via-secondary to-accent shadow-xl">
                                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0b0b13] bg-[#0b0b13]">
                                            <img
                                                src={user?.photoURL || "https://i.ibb.co/Vvz3vLp/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
                                                alt="User Avatar"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 right-2 w-7 h-7 bg-green-500 border-4 border-[#0b0b13] rounded-full animate-pulse-glow" title="Online"></div>
                                </div>
                            </div>

                            {/* User Details */}
                            <div className="text-center space-y-2 mb-8">
                                <h2 className="text-3xl font-black text-white px-2 break-words">
                                    {user?.displayName || "Player One"}
                                </h2>
                                <p className="text-white/60 font-medium font-mono text-sm inline-flex items-center gap-2 bg-white/5 py-1.5 px-4 rounded-full">
                                    <span>📧</span> {user?.email || "No email provided"}
                                </p>
                                <div className="flex justify-center flex-wrap gap-2 pt-4">
                                    <span className="glass px-3 py-1.5 rounded-full text-xs font-bold text-primary border border-primary/20 tracking-wider">PLAYVERSE MEMBER</span>
                                    <span className="glass px-3 py-1.5 rounded-full text-xs font-bold text-secondary border border-secondary/20 tracking-wider">VERIFIED</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link to="/myprofilelogin" className="btn-premium flex-1 py-3.5 flex justify-center items-center gap-2">
                                    <span>✏️</span> Edit Profile
                                </Link>
                                <Link to="/games" className="btn-premium bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent flex-1 py-3.5 flex justify-center items-center gap-2 border-none">
                                    <span>🎮</span> Browse Games
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center animate-slide-up">
                        <p className="text-2xl font-bold text-red-500 mb-4">You are not logged in.</p>
                        <Link to="/auth/login" className="btn-premium px-8 py-3">Login Now</Link>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Myprofile;
