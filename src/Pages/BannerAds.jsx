import React from "react";
import Slider from "react-slick";
import img1 from "../assets/abc.jpg";
import img2 from "../assets/abc2.jpg";
import img3 from "../assets/abc3.jpg";  


const BannerAds = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,            
    cssEase: "ease-in-out",
    appendDots: (dots) => (
      <div style={{ bottom: "20px" }}>
        <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-white/30 rounded-full hover:bg-white hover:scale-150 transition-all duration-300"></div>
    ),
  };

  const banners = [
    { img: img1, label: "Advertisement" },
    { img: img2, label: "Sponsored" },
    { img: img3, label: "Promotion" },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-14 mb-24 px-6 relative">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full -z-10 -translate-y-1/2"></div>
      
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white tracking-widest uppercase">
          Sponsored <span className="text-primary">•</span> Promotions
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      {/* Slider */}
      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="relative outline-none">
              <a href="/" className="block relative focus:outline-none">
                <img
                  src={banner.img}
                  alt={`Ad banner ${index + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-[2rem] opacity-80 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-4 right-4 glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-white backdrop-blur-md border border-white/10 uppercase">
                  {banner.label}
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerAds;