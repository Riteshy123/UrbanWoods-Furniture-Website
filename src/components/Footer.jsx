import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="mb-4 lg:mb-0">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p><FaMapMarkerAlt className="inline-block mr-2" /> Gurgaon, Furniture Market SPR Road near M3M Sector 71 Gurgoan</p>
            <p><FaMapMarkerAlt className="inline-block mr-2" /> Dehradun, Opp.Mega County near DIT College Mussorie Road Dehradun</p>
            <p className="mb-2"><FaPhone className="inline-block mr-2" /> +91 9161742417 : 9670142221 : 9899970493</p>
            <p className='mt-1'><FaEnvelope className="inline-block mr-2" /> <a href="mailto:urbanwoods9@gmail.com">urbanwoods9@gmail.com</a></p>
          </div>
          <div className="mb-4 lg:mb-0 ">
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col space-y-6">
              <a href="https://www.facebook.com/profile.php?id=61556106465909&mibextid=uzlsIk" className="flex items-center text-gray-400 hover:text-white " target="_blank" rel="noopener noreferrer">
                <FaFacebook className="mr-2" />
                Facebook
              </a>
              <a href="https://whatsapp.com/channel/0029VaDHm0kBadmfRWlq4X2w" className="flex items-center text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2" />
                Whatsapp
              </a>
              <a href="https://www.instagram.com/urbanwood_furnitur?igsh=MWRpdzhvOHRld3lzbQ==" className="flex items-center text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="mr-2" />
                Instagram
              </a>
             
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p>"UrbanWoodsdeal in pure sheesham and teak wood. Team involved in the design, manufacture, distribution, and sale of functional and decorative objects of household equipment. Our mission is to create beautiful and functional pieces that reflect your style and personality."</p>
            
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm mr-30">
          <p>&copy; 2024 UrbanWoods Furniture and Interior. All rights reserved.</p>
        </div>
        <div className={`${showScroll ? 'block' : 'hidden'} fixed bottom-10 ml-5 right-10 bg-dark p-3 rounded-full shadow-lg cursor-pointer transition duration-500 ease-in-out`} onClick={scrollTop}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-light-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
