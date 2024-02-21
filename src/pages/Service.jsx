import React, { useState } from 'react';
import HeaderNavbar from '../components/HeaderNavbar';
import Homefurniture from '../components/Homefurniture';
import Officefurniture from '../components/Officefurniture';
import Outdoorfurniture from '../components/Outdoorfurniture';
import Service2 from '../components/Service2';

const ServiceSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
    <HeaderNavbar />
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="flex justify-center mb-8">
        <button
          className={`mx-2 px-4 py-2 rounded-full ${
            selectedItem === 'chair' ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white'
          }`}
          onClick={() => handleItemClick('chair')}
        >
          Home Furniture
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-full ${
            selectedItem === 'bed' ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white'
          }`}
          onClick={() => handleItemClick('bed')}
        >
          Office Furniture
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-full ${
            selectedItem === 'sofa' ? 'bg-gray-300 text-gray-700' : 'bg-blue-500 text-white'
          }`}
          onClick={() => handleItemClick('sofa')}
        >
          Outdoor & Garden 
        </button>
      </div>
      {selectedItem && (
        <div className="text-center">
          {selectedItem === 'chair' && <Homefurniture />}
          {selectedItem === 'bed' && <Officefurniture />}
          {selectedItem === 'sofa' && <Outdoorfurniture />}
        </div>
      )}
    </div>
    <Service2 />
    </>
  );
};

export default ServiceSection;
