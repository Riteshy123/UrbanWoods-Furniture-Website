import React from 'react';
import HeaderNavbar from '../components/HeaderNavbar';
import Service2 from '../components/Service2';

const Outdoorfurniture = () => {
  
  const products = [
    {
      id: 1,
      name: "Patio Set",
      description: "Complete patio set for outdoor dining and relaxation.",
      image: "/patioset.avif",
    },
    {
      id: 2,
      name: "Outdoor Bench",
      description: "Classic garden bench for enjoying your outdoor space.",
      image: "/Outdoorbench.jpg",
    },
    {
      id: 3,
      name: "Outdoor Dining Table",
      description: "Sturdy outdoor dining table for family meals and gatherings.",
      image: "/outdoordining.avif",
    },
    {
      id: 4,
      name: "Adirondack Chair",
      description: "Comfortable Adirondack chair for lounging on your porch or patio.",
      image: "/adirondackChair.avif",
    },
    {
      id: 5,
      name: "Hammock",
      description: "Relaxing hammock for enjoying lazy afternoons outdoors.",
      image: "/hammok.jpg",
    },
    {
      id: 6,
      name: "Outdoor Sofa Set",
      description: "Cozy outdoor sofa for lounging and entertaining guests.",
      image: "/gardensofaset.jpg",
    },
    {
      id: 7,
      name: "Outdoor Lounge Chair",
      description: "Modern lounge chair for sunbathing and relaxation.",
      image: "/OutdoorLoungeChair.avif",
    },
    {
      id: 8,
      name: "Iron Swing",
      description: "Stylish iron swing for adding charm to your garden or patio.",
      image: "/HangingChair.jpg",
    },
    {
      id: 9,
      name: "Outdoor Umbrella",
      description: "Large outdoor umbrella for shade and protection from the sun.",
      image: "/outdoorumbrella.avif",
    },
    {
      id: 10,
      name: "Garden Chair",
      description: "Comfortable garden chair for relaxing in your outdoor space.",
      image: "/gardenchair.jpg",
    },
    {
      id: 11,
      name: "Garden Gazebo",
      description: "Elegant garden gazebo for outdoor events and gatherings.",
      image: "/gardenGazebo.jpg",
    },
    {
      id: 12,
      name: "Rope Sofa Set",
      description: "Stylish rope sofa set for modern outdoor living spaces.",
      image: "/sofasetrope2.jpg",
    },
    {
      id: 13,
      name: "Garden Sofa",
      description: "Comfortable and durable garden sofa for outdoor relaxation.",
      image: "/gardensofa.jpg",
    },
    {
      id: 14,
      name: "Garden Dining Table",
      description: "Spacious garden dining table for outdoor meals and gatherings.",
      image: "/gardenndining.jpg",
    },
    {
      id: 15,
      name: "Garden Bench",
      description: "Classic garden bench for adding seating to your outdoor space.",
      image: "/gardenbench.jpg",
    },
  ];

  return (
    <>
    <HeaderNavbar />
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Outdoor and Garden Furniture Products</h2>
          <p className="mt-4 text-lg text-gray-600">Browse through our collection of high-quality outdoor and garden furniture</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover object-center transition duration-300 transform hover:scale-105" src={product.image} alt={product.name} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className='text-gray-900'>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Service2 />
    </>
  );
};

export default Outdoorfurniture;
