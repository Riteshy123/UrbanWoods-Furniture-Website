import React from 'react';
import { useNavigate } from 'react-router-dom';

const Choice = () => {
  const navigate = useNavigate();

  const handleShopNowClick = () => {
    // Navigate to the contact page
    navigate('/contact');
  };

  return (
    <div className="bg-light-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0"> 
            <h1 className="text-4xl text-black font-bold mb-4">The Best Furniture Manufacturer Of Your Choice</h1>
            <p className="text-lg mb-6 text-black">Discover the premier furniture manufacturer that exceeds all expectations. With a commitment to quality craftsmanship and innovative design, we redefine the art of furniture making. 
            Our meticulous attention to detail ensures each piece is not only stunning but also built to last. From luxurious sofas to exquisite dining sets, every creation reflects our passion for excellence. Experience the epitome of comfort, style, and durability with our exceptional furniture collections. Elevate your living space with the best in class and make a statement that speaks volumes about your discerning taste.</p>
            <button onClick={handleShopNowClick} className="bg-black text-light-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">Shop Now</button>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0 mb-8 lg:mb-0 ml-5"> 
            <img src="/interior.avif" alt="Furniture Hero" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
