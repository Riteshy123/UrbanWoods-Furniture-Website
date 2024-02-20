import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-light-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mt-8 lg:mt-0 mb-8 lg:mb-0"> 
            <img src="/dining.avif" alt="Furniture Hero" className="w-full rounded-lg shadow-lg" />
          </div>

          <div className="lg:w-1/2 mb-8 lg:mb-0 ml-5"> 
            <h1 className="text-4xl text-black font-bold mb-4">We Create your home more aesthetic</h1>
            <p className="text-lg mb-6 text-black">Transform your living space into a sanctuary of comfort and style. Elevate every corner with carefully curated pieces that reflect your unique personality and taste. From cozy sofas and elegant coffee tables to chic accent chairs and exquisite artwork, discover the perfect balance of functionality and aesthetics. Let your home tell the story of who you are and create an 
            atmosphere that inspires and rejuvenates every day.</p>
            <button onClick={handleShopNowClick} className="bg-black text-light-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
