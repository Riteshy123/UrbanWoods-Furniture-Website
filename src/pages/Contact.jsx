import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import HeaderNavbar from '../components/HeaderNavbar';
import SocialMediaList from '../components/SocialMedialist';

const Contact = () => {
    return (
        <>
            <HeaderNavbar />
            <div className="bg-light-900 text-white py-20">
                <div className="container mx-auto px-4" >
                    <div className="flex flex-col lg:flex-row items-center justify-between" >

                        <div className="lg:w-3/2 mb-8 lg:mb-0" >
                            <h1 className="text-4xl text-black font-bold mb-4">Contact Us</h1>
                            <p className="text-lg mb-6 text-black">
                                <ul className=" mt-4 text-left list-none py-4">
                                     <li className='py-2'><FiMapPin className="inline-block mr-2 text-black " />: Gurgaon, Furniture Market SPR Road near M3M Sector 71 Gurgoan</li>
                                     <li className='py-2'><FiPhone className="inline-block mr-2 text-black " />: +91 9161742417 : 9670142221 : 9899970493</li>
                                     <li className='py-2'><FiMail className="inline-block mr-2 text-black " />: urbanwoods9@gmail.com</li>
                                </ul>
                            </p>
                        
                            <SocialMediaList />
                
                        </div>

                        <div className="lg:w-1/2 mt-8 lg:mt-0 mb-8 lg:mb-0 ml-1 container">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7018.889809949035!2d77.0194565926151!3d28.405829303157017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2322b8d00193%3A0x3930bb82335132df!2sUrbanWoods%20Furniture%20and%20Interior%20works!5e0!3m2!1sen!2sin!4v1708288464349!5m2!1sen!2sin"
                                    width="650"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className='rounded-lg'
                                >
                                </iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-light-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center justify-between">

                        <div className="lg:w-1/2 mt-8 lg:mt-0 mb-8 lg:mb-0  container">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13764.618848420841!2d78.0809016!3d30.4033521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d75498003ecb%3A0xf6be8ff09354dac7!2sUrbanWoods%20Furniture%20and%20Interior%20Dehradun!5e0!3m2!1sen!2sin!4v1708320927576!5m2!1sen!2sin" 
                            width="650" 
                            height="450"
                            style={{border:0}}
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                    
                              </iframe>
                            </div>
                        </div>

                        <div className="lg:w-3/2 mb-8 lg:mb-0">
                            <h1 className="text-4xl text-black font-bold mb-4">Contact Us</h1>
                        
                            <p className="text-lg mb-6 text-black">
                                <ul className=" mt-4 text-left list-none py-4">
                                     <li className='py-2'><FiMapPin className="inline-block mr-2 text-black " />: Opp. Mega County, Near DIT College, Mussorrie Road, Dehradun</li>
                                     <li className='py-2'><FiPhone className="inline-block mr-2 text-black " />: +91 9161742417 : 9670142221 : 9899970493</li>
                                     <li className='py-2'><FiMail className="inline-block mr-2 text-black " />: urbanwoods9@gmail.com</li>
                                </ul>
                            </p>
                        
                            <SocialMediaList />
                
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
