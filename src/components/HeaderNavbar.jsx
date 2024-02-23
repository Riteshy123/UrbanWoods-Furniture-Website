import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import './HeaderNavbar.css';

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark p-1 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex ml-0 ">
          <p className="text-white text-lg font-semibold ">UrbanWoods &nbsp;<FontAwesomeIcon icon={faCouch} className="text-white mr-2" size="lg" /> <br/> <small>furniture and Interior </small></p>
        </div>
              
        <div className="flex items-center">
        <div className={`lg:flex flex-grow items-center ${isOpen ? 'block' : 'hidden'}`}>
  <ul className="lg:flex lg:ml-auto space-x-4 mt-2"> {/* Add mt-2 for reduced vertical margin */}
    <li className="mb-1 lg:mb-0 ml-4"> {/* Reduce bottom margin from mb-3 to mb-1 */}
      <Link 
        to="/about" 
        className="block text-lg text-white hover:underline hover:text-gray-300 mr-4"
        onClick={toggleNavbar}
      >
        About
      </Link>
    </li>
    <li className="mb-1 lg:mb-0"> {/* Reduce bottom margin from mb-3 to mb-1 */}
      <Link 
        to="/home" 
        className="block text-lg text-white hover:underline hover:text-gray-300"
        onClick={toggleNavbar}
      >
        Home Furniture
      </Link>
    </li>
    <li className="mb-1 lg:mb-0"> {/* Reduce bottom margin from mb-3 to mb-1 */}
      <Link 
        to="/office" 
        className="block text-lg text-white hover:underline hover:text-gray-300"
        onClick={toggleNavbar}
      >
        Office Furniture
      </Link>
    </li>
    <li className="mb-1 lg:mb-0"> {/* Reduce bottom margin from mb-3 to mb-1 */}
      <Link 
        to="/outdoor" 
        className="block text-lg text-white hover:underline hover:text-gray-300"
        onClick={toggleNavbar}
      >
        Outdoor & Garden
      </Link>
    </li>
    <li className="mb-1 lg:mb-0"> {/* Reduce bottom margin from mb-3 to mb-1 */}
      <Link 
        to="/contact" 
        className="block text-lg text-white hover:underline hover:text-gray-300"
        onClick={toggleNavbar}
      >
        Contact
      </Link>
    </li>
    {/* Add more list items and reduce bottom margin similarly */}
  </ul>
</div>

  <button 
  className={`text-white lg:hidden ml-4 focus:outline-none ${isOpen ? 'rotate' : ''}`}
  onClick={toggleNavbar}
>
  {isOpen ? (
    <svg 
      className="h-6 w-6 fill-current" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M10 11.414l-6.707 6.707a1 1 0 11-1.414-1.414L8.586 10 1.293 3.707a1 1 0 011.414-1.414L10 8.586l6.707-6.707a1 1 0 111.414 1.414L11.414 10l6.707 6.707a1 1 0 11-1.414 1.414L10 11.414z" 
      />
    </svg>
  ) : (
    <svg 
      className="h-6 w-6 fill-current" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20"
    >
      <path 
        fillRule="evenodd" 
        d="M4 6h16a1 1 0 010 2H4a1 1 0 010-2zM4 11h16a1 1 0 010 2H4a1 1 0 010-2zM4 16h16a1 1 0 010 2H4a1 1 0 010-2z" 
      />
    </svg>
  )}
</button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavbar;
