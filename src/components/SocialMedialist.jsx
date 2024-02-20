import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const SocialMediaList = () => {
  return (
    <div className="flex items-center ">
      <a href="https://www.facebook.com/people/Urbanwood-Furniture-and-interior-work/61556106465909/?mibextid=uzlsIk" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-2">
        <FaFacebook size={30} />
      </a>
      <a href="https://whatsapp.com/channel/0029VaDHm0kBadmfRWlq4X2w" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 mx-2">
        <FaWhatsapp size={30} />
      </a>
      <a href="https://www.instagram.com/urbanwood_furnitur?igsh=MWRpdzhvOHRld3lzbQ==" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-700 mx-2">
        <FaInstagram size={30} />
      </a>
    </div>
  );
};

export default SocialMediaList;
