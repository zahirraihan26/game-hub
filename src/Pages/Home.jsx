
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/hero-banner-1.jpg"
import banner2 from "../assets/hero-banner-3.jpg"
import banner3 from "../assets/hero-banner-2.jpg"
import GameCard from '../Componet/GameCard';
import { Link } from 'react-router';

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
            <div className='home-slider relative'>
                <Slider {...settings}>
                    <div className='relative'>
                        <img src={banner1} alt="Slide 1" className='w-full h-96 object-cover' />
                        <div className='absolute top-1/2 left-10 transform -translate-y-1/2 text-left text-white'>
                            <h1 className='text-4xl font-bold'>Welcome to GameHub</h1>
                            <p className='mt-2 text-lg'>Discover amazing indie games</p>
                           <Link to="/games">
                            <button
                                className="text-white px-5 py-3 rounded-xl font-bold mt-3 bg-orange-500 transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(249,115,22,0.6)]"> Browse Games
                            </button>
                           </Link>

                        </div>
                    </div>
                    <div className='relative'>
                        <img src={banner2} alt="Slide 2" className='w-full h-96 object-cover' />
                        <div className='absolute top-1/2 left-10 transform -translate-y-1/2 text-left text-white'>
                            <h1 className='text-4xl font-bold'>Play Your Favorite Games</h1>
                            <p className='mt-2 text-lg'>Anywhere, anytime</p>
                               <Link to="/games"><button
                                className="text-white px-5 py-3 rounded-xl font-bold mt-3 bg-orange-500 transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(249,115,22,0.6)]"> Browse Games
                            </button></Link>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src={banner3} alt="Slide 3" className='w-full h-96 object-cover' />
                        <div className='absolute top-1/2 left-10 transform -translate-y-1/2 text-left text-white'>
                            <h1 className='text-4xl font-bold'>Join the Gaming Community</h1>
                            <p className='mt-2 text-lg'>Connect with other players</p>
                              <Link to="/games"> 
                               <button
                                className="text-white px-5 py-3 rounded-xl font-bold mt-3 bg-orange-500 transition-all duration-300 hover:shadow-[0_0_20px_4px_rgba(249,115,22,0.6)]"> Browse Games
                            </button>
                              </Link>
                        </div>
                    </div>
                </Slider>
            </div>




            {/* GameCard */}
            {/* <div>

                <GameCard></GameCard>
            </div> */}

        </div>


    );
};

export default Home;