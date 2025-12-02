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
    slidesToShowcât: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,            
    cssEase: "ease-in-out",
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots-custom"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-white/50 rounded-full hover:bg-white transition"></div>
    ),
  };

  const banners = [
    { img: img1, label: "Advertisement" },
    { img: img2, label: "Sponsored" },
    { img: img3, label: "Promotion" },
  ];

  return (
    <div className="max-w-7xl mx-auto mt-14 mb-10 px-4">
      <h2 className="text-2xl font-bold text-white mb-6">
        Sponsored • Promotions
      </h2>

      {/* Slider */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="relative">
              <a href="/" className="block">
                <img
                  src={banner.img}
                  alt={`Ad banner ${index + 1}`}
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl 
                             opacity-90 hover:opacity-100 transition duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-black/70 text-white 
                                px-4 py-1.5 rounded-md text-sm font-medium backdrop-blur-sm">
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