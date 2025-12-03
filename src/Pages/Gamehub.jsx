import React from 'react';
import { motion } from "framer-motion";
import img1 from '../assets/unnamed.jpg';
import img2 from '../assets/unnamed (1).jpg';
import img3 from '../assets/hero-banner-3.jpg';
import img4 from '../assets/hero-banner-1.jpg';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const Gamehub = () => {
    return (
        <motion.div
            className="bg-gray-950 text-white font-sans min-h-screen py-10  px-4 md:px-8"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
        >

            {/* MAIN HEADER */}
            <motion.div className="text-center md:pt-16 mb-16" variants={fadeUp}>
                <motion.h1
                    className="text-5xl md:text-6xl font-extrabold mb-2 tracking-wide"
                    initial={{ letterSpacing: "-10px", opacity: 0 }}
                    animate={{ letterSpacing: "2px", opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    GAMEHUB<br />CONNECT
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-3xl font-light mb-8"
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                >
                    All your games, friends, and benefits in one place.
                </motion.h2>

                <motion.p className="max-w-3xl mx-auto leading-relaxed text-gray-400 mb-4" variants={fadeUp}>
                    Ubisoft Connect is the ecosystem of player services and the goals platform for your Ubisoft games. It is a free service available on all devices.
                </motion.p>

            </motion.div>

            {/* FEATURE 1 */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-8 my-20 max-w-7xl mx-auto"
                variants={fadeUp}
            >
                <motion.div
                    className="w-full md:w-1/2 flex justify-center  order-2 md:order-1"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        className="w-96 h-96 md:w-[530px] md:h-[530px] rounded-full bg-gray-900 shadow-lg shadow-purple-500/10 overflow-hidden"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 4 }}

                    >
                        <img src={img2} alt="game" className="w-full h-full object-cover object-center" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 p-4 max-w-lg order-1 md:order-2"
                    variants={fadeUp}
                >
                    <h3 className="text-3xl font-bold mb-3">One ecosystem for all players</h3>
                    <p className="leading-relaxed text-gray-300 mb-4">
                        Ubisoft Connect features seamlessly integrated gaming across platforms and devices.
                    </p>
                    <p className="leading-relaxed text-gray-300">
                        Your stats and friends list are always up-to-date and accessible.
                    </p>
                </motion.div>
            </motion.div>

            {/* FEATURE 2 */}
            <motion.div
                className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 my-20 max-w-7xl mx-auto"
                variants={fadeUp}
            >
                <motion.div
                    className="w-full md:w-1/2 flex justify-center p-4"
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.div
                        className="w-96 h-96 md:w-[430px] md:h-[430px] rounded-full bg-gray-900 shadow-lg overflow-hidden"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 4 }}
                    >
                        <img src={img1} alt="reward" className="w-full h-full object-cover object-center" />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="w-full md:w-1/2 p-4 max-w-lg"
                    variants={fadeUp}
                >
                    <h3 className="text-3xl font-bold mb-3">Your rewards</h3>
                    <p className="leading-relaxed text-gray-300 mb-4">
                        Level up, gain XP points, and redeem them for exclusive rewards.
                    </p>
                    <p className="leading-relaxed text-gray-300 mb-6">
                        Get <strong className="text-yellow-400">20% off</strong> using your earned currency.
                    </p>
                    <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg uppercase tracking-wider transition duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.92 }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* FEATURE 3 */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-8 my-20 max-w-7xl mx-auto"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* IMAGE SIDE */}
                <motion.div
                    className="w-full md:w-1/2 flex justify-center p-4 order-2 md:order-1"
                    whileHover={{ scale: 1.03 }}
                >
                    <motion.div
                        className="w-full max-w-2xl rounded-xl bg-black border border-gray-700/50 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img src={img3} alt="pc app" className="w-full h-full object-cover object-center" />
                    </motion.div>
                </motion.div>

                {/* TEXT SIDE */}
                <motion.div
                    className="w-full md:w-1/2 p-4 max-w-lg order-1 md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-3xl font-bold mb-3">Gamehub Connect PC</h3>
                    <p className="leading-relaxed text-gray-300 mb-4">
                        A central hub for all your Ubisoft titles with social & community features.
                    </p>
                    <p className="leading-relaxed text-gray-300">
                        Faster downloads, cloud saves, and seamless access.
                    </p>
                </motion.div>
            </motion.div>


            {/* FOOTER */}
            <motion.div
                className="mt-20 pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* LEFT TEXT SIDE */}
                <div className="w-full md:w-1/2 text-left px-4 md:px-6">
                    <h2 className="text-3xl md:text-4xl font-light mb-4">
                        All your games, friends, and benefits in one place.
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        View your full game library, track stats, and earn exclusive rewards with Gamehub Connect.
                    </p>
                </div>

                {/* RIGHT IMAGE SIDE */}
                <motion.div
                    className="w-full md:w-1/2 max-w-2xl mx-auto rounded-xl bg-black border border-gray-700/50 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 4 }}
                    viewport={{ once: true }}
                >
                    <img src={img4} alt="game list" className="w-full h-full object-cover object-center" />
                </motion.div>
            </motion.div>

        </motion.div>
    );
};

export default Gamehub;

