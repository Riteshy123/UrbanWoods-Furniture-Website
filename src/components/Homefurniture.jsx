import React from 'react';

const Homefurniture = () => {
  
  const products = [
    {
      id: 1,
      name: "Sofa",
      description: "Comfortable and stylish sofa for your living room.",
      image: "/sofa.avif",
    },
    {
      id: 2,
      name: "Dining Table",
      description: "Elegant dining table for family gatherings and meals.",
      image: "/table.avif",
    },
    {
      id: 3,
      name: "Bed",
      description: "Cozy and durable bed for a good night's sleep.",
      image: "/bed.avif",
    },
    {
      id: 4,
      name: "Bookshelf",
      description: "Stylish bookshelf to organize and display your favorite books.",
      image: "/Bookhelf.jpg",
    },
    {
      id: 5,
      name: "Coffee Table",
      description: "Modern coffee table for your living room or lounge area.",
      image: "/coffe.avif",
    },
    {
      id: 6,
      name: "Desk",
      description: "Functional desk for your home office or study space.",
      image: "/Desk.avif",
    },
    {
      id: 7,
      name: "Kitchen Table",
      description: "Sturdy kitchen table for meal preparation and dining.",
      image: "/kitchen.avif",
    },
    {
      id: 8,
      name: "Recliner",
      description: "Comfortable recliner for relaxing and unwinding after a long day.",
      image: "/Recliner.avif",
    },
    {
      id: 9,
      name: "Ottoman",
      description: "Stylish ottoman for adding extra seating or as a footrest in your living room.",
      image: "/ottoman.avif",
    },
    
  ];

  // Filter products to include only home furniture and kitchen products
  const homeAndKitchenProducts = products.filter(product => ['Sofa', 'Dining Table', 'Bed', 'Bookshelf', 'Coffee Table', 'Desk', 'Kitchen Table', 'Microwave Oven', 'Recliner', 'Ottoman'].includes(product.name));

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Home Furniture Products</h2>
          <p className="mt-4 text-lg text-gray-600">Browse through our collection of high-quality home furniture and kitchen products</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {homeAndKitchenProducts.map(product => (
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

export default Homefurniture;
