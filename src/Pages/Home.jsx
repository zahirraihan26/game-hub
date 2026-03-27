
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/hero-banner-1.jpg"
import banner2 from "../assets/hero-banner-3.jpg"
import banner3 from "../assets/hero-banner-2.jpg"
import GameCard from '../components/GameCard';
import Downloadforfree from './Downloadforfree';
import BannerAds from './BannerAds';
import Services from './Services';
import { Link } from 'react-router';
import { IoGameControllerOutline } from 'react-icons/io5';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div>
            <div className='home-slider relative overflow-hidden'>
                <Slider {...settings}>
                    <div className='relative group'>
                        <img src={banner1} alt="Slide 1" className='w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105' />
                        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center'>
                            <div className='max-w-2xl ml-20 glass p-10 rounded-3xl border border-white/10 animate-float'>
                                <h1 className='text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4'>Welcome to PlayVerse</h1>
                                <p className='text-xl text-white/80 leading-relaxed mb-8'>Discover amazing indie games crafted by passionate creators worldwide. Your portal to extraordinary digital journeys starts here.</p>
                                <Link to="/games">
                                    <button className="btn-premium text-lg px-10 py-4"> Browse Games </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img src={banner2} alt="Slide 2" className='w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105' />
                        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center'>
                            <div className='max-w-2xl ml-20 glass p-10 rounded-3xl border border-white/10 animate-float' style={{animationDelay: '1s'}}>
                                <h1 className='text-6xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-4'>Play Your Favorites</h1>
                                <p className='text-xl text-white/80 leading-relaxed mb-8'>Experience seamless gaming across all your devices. Anywhere, anytime, without limits. Join millions of players today.</p>
                                <Link to="/games">
                                    <button className="btn-premium text-lg px-10 py-4"> Explore Now </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='relative group'>
                        <img src={banner3} alt="Slide 3" className='w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105' />
                        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center'>
                            <div className='max-w-2xl ml-20 glass p-10 rounded-3xl border border-white/10 animate-float' style={{animationDelay: '2s'}}>
                                <h1 className='text-6xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-4'>Join the Community</h1>
                                <p className='text-xl text-white/80 leading-relaxed mb-8'>Connect with a thriving ecosystem of gamers and developers. Share your thoughts, get news, and grow together.</p>
                                <Link to="/games">
                                    <button className="btn-premium text-lg px-10 py-4"> Get Involved </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>




            {/* Featured Section Header */}
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-primary border border-primary/20">
                        Featured Collection
                    </div>
                    <h2 className="text-5xl font-black bg-gradient-to-r from-white via-white/80 to-white/50 bg-clip-text text-transparent italic">
                        TOP RATED GAMES
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <p className="max-w-xl text-white/60 text-lg leading-relaxed pt-4">
                        Hand-picked by our editors for their exceptional gameplay, stunning visuals, and unforgettable experiences.
                    </p>
                </div>
            </div>

            {/* GameCard Section */}
            <div className="relative pb-24">
                <div className="absolute inset-0 bg-primary/5 blur-[120px] -z-10 rounded-full scale-50"></div>
                <GameCard />
            </div>

            <Downloadforfree />
            
            <div className="py-12">
                <BannerAds />
            </div>
            
            <Services />

            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-6 pb-32 pt-24">
                <div className="glass-dark rounded-[3rem] p-16 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-black">Ready to start your adventure?</h2>
                        <p className="text-white/60 max-w-md">Join PlayVerse today and get early access to upcoming indie titles, exclusive rewards, and our growing community.</p>
                        <div className="flex gap-4">
                            <Link to="/auth/register" className="btn-premium py-4 px-8">Create Account</Link>
                            <Link to="/newsletter" className="glass px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all border border-white/10">Learn More</Link>
                        </div>
                    </div>
                    <div className="hidden lg:block relative z-10">
                        <div className="w-64 h-64 rounded-full border border-primary/20 flex items-center justify-center p-4 animate-float">
                            <div className="w-full h-full rounded-full border border-secondary/20 flex items-center justify-center p-4" style={{animationDelay: '1s'}}>
                                <IoGameControllerOutline className="text-8xl text-primary drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Home;