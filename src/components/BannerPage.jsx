import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import './BannerPage.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function BannerPage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleShopNowClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide style={{ backgroundImage: "url('sofa.avif')", height: "550px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
         <div className="text-center ">
           <h1 className="text-5xl font-bold mb-4 ">Discover Your Perfect Furniture</h1>
           <p className="text-lg mb-6 "><strong>Explore our wide range of high-quality furniture pieces to elevate your home decor.</strong></p>
           <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300" onClick={handleShopNowClick}>Shop Now</button>
         </div>
      
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: "url('homefurni2.avif')", height: "550px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="text-center ">
           <h1 className="text-5xl font-bold mb-4 ">Discover Your Home Furniture</h1>
           <p className="text-lg mb-6 "><strong>Explore our wide range of high-quality furniture pieces to elevate your home decor.</strong></p>
           <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300" onClick={handleShopNowClick}>Shop Now</button>
         </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: "url('office.avif')", height: "550px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="text-center ">
           <h1 className="text-5xl font-bold mb-4">Discover Your Office Furniture</h1>
           <p className="text-lg mb-6 "><strong>Explore our wide range of high-quality furniture pieces to elevate your home decor.</strong></p>
           <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300" onClick={handleShopNowClick}>Shop Now</button>
         </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: "url('outdoor.avif')", height: "550px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="text-center ">
           <h1 className="text-5xl font-bold mb-4 text-black">Discover Your Outdoor Furniture</h1>
           <p className="text-lg mb-6 "><strong>Explore our wide range of high-quality furniture pieces to elevate your home decor.</strong></p>
           <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300" onClick={handleShopNowClick}>Shop Now</button>
         </div>
        </SwiperSlide>
  
        
      </Swiper>
    </>
  );
}


        


 