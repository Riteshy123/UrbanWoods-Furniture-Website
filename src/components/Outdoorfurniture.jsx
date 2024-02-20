import React from 'react';

const Outdoorfurniture = () => {
  
  const products = [
    {
      id: 1,
      name: "Patio Set",
      description: "Complete patio set for outdoor dining and relaxation.",
      price: "$799",
      image: "/patioset.avif",
    },
    {
      id: 2,
      name: "Garden Bench",
      description: "Classic garden bench for enjoying your outdoor space.",
      price: "$199",
      image: "/gardenbench.avif",
    },
    {
      id: 3,
      name: "Outdoor Dining Table",
      description: "Sturdy outdoor dining table for family meals and gatherings.",
      price: "$349",
      image: "/outdoordining.avif",
    },
    {
      id: 4,
      name: "AdirondackChair",
      description: "Comfortable Adirondack chair for lounging on your porch or patio.",
      price: "$149",
      image: "/adirondackChair.avif",
    },
    {
      id: 5,
      name: "Hammock",
      description: "Relaxing hammock for enjoying lazy afternoons outdoors.",
      price: "$99",
      image: "/swingchair.avif",
    },
    {
      id: 6,
      name: "Outdoor Sofa",
      description: "Cozy outdoor sofa for lounging and entertaining guests.",
      price: "$599",
      image: "/outdoorsofa.avif",
    },
    {
      id: 7,
      name: "Outdoor Lounge Chair",
      description: "Modern lounge chair for sunbathing and relaxation.",
      price: "$249",
      image: "/OutdoorLoungeChair.avif",
    },
    {
      id: 8,
      name: "Fire Pit",
      description: "Stylish fire pit for adding warmth and ambiance to your outdoor space.",
      price: "$399",
      image: "/firepit.avif",
    },
    {
      id: 9,
      name: "Outdoor Umbrella",
      description: "Large outdoor umbrella for shade and protection from the sun.",
      price: "$129",
      image: "/outdoorumbrella.avif",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl"> Our Outdoor Furniture Products</h2>
          <p className="mt-4 text-lg text-gray-600">Browse through our collection of high-quality outdoor furniture</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover object-center transition duration-300 transform hover:scale-105" src={product.image} alt={product.name} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outdoorfurniture;
