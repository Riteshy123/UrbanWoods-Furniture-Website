import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import './NewItems.css';

const NewItems = () => {
  return (
    <div className="flex flex-col md:flex-row container">
      <div className="w-full md:w-1/4 bg-gray-200 p-8">
        <h1 className="text-4xl text-black font-bold">New In <br/>Store Now</h1>
        <p className='mt-5 text-lg text-black'>Get the latest items immediately with promo prices</p>
        <div className='flex items-center mt-3'>
          <h2 className='text-xl mr-2'>Check All</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      

      <div className="w-full md:w-3/4">
        <Swiper
          slidesPerView={1}
          spaceBetween={9}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide><img src='/NewSofa.avif' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/light.avif' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/newalmari.avif' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/gardenlounger.jpg'className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/newottoman.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/newchair.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/newbed.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/shelves.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/newSofa.jpg' className='rounded-lg'/></SwiperSlide>
          <SwiperSlide><img src='/newoffice.jpg' className='rounded-lg'/></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewItems;
