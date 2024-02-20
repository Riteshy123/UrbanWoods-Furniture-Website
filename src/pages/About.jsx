import React from 'react';
import HeaderNavbar from '../components/HeaderNavbar';
const About = () => {
  return (
    <>
    <HeaderNavbar />
    <div className="bg-light-900 text-white py-20">
    <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-between">

      <div className="lg:w-1/2 mb-8 lg:mb-0"> 
      <h3 className="text-2xl font-semibold text-gray-900">Who We Are ?</h3>
            <p className="mt-4 text-gray-600"><b>UrbanWoodsdeal in pure sheesham and teak wood.</b> We are a passionate team dedicated to providing high-quality furniture to enhance your living space. Our mission is to create beautiful and functional pieces that reflect your style and personality.</p>
            <h3 className="text-2xl font-semibold text-gray-900 mt-8">Our Values</h3>
            <ul className="mt-4 text-gray-600">
              <li className="list-disc ml-4">Quality craftsmanship</li>
              <li className="list-disc ml-4">Exceptional customer service</li>
              <li className="list-disc ml-4">Innovation and creativity</li>
              <li className="list-disc ml-4">Sustainability and eco-friendly practices</li>
            </ul>
      </div>

      <div className="lg:w-1/2 mt-8 lg:mt-0 mb-8 lg:mb-0 ml-5"> 
        <img src="/interior.avif" alt="Furniture Hero" className="w-full rounded-lg shadow-lg" />
      </div>

    </div>
  </div>
</div>
</>
  );
};

export default About;
