import React from 'react';

const Products = () => {
  
  const products = [
    {
      id: 1,
      name: "Sofa",
      description: "Comfortable and stylish sofa for your living room.",
      price: "$499",
      image: "/sofa.avif",
    },
    {
      id: 2,
      name: "Dining Table",
      description: "Elegant dining table for family gatherings and meals.",
      price: "$299",
      image: "/table.avif",
    },
    {
      id: 3,
      name: "Bed",
      description: "Cozy and durable bed for a good night's sleep.",
      price: "$699",
      image: "/bed.avif",
    },
    {
      id: 4,
      name: "Bookshelf",
      description: "Stylish bookshelf to organize and display your favorite books.",
      price: "$199",
      image: "/Bookhelf.jpg",
    },
    {
      id: 5,
      name: "Coffee Table",
      description: "Modern coffee table for your living room or lounge area.",
      price: "$249",
      image: "/coffe.avif",
    },
    {
      id: 6,
      name: "Desk",
      description: "Functional desk for your home office or study space.",
      price: "$349",
      image: "/Desk.avif",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg text-gray-600">Browse through our collection of high-quality furniture</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img className="w-full h-56 object-cover object-center transition duration-300 transform hover:scale-105" src={product.image} alt={product.name} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-2 text-gray-600">{product.description}</p>
                {/* <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-semibold">{product.price}</span>
                  <button className="px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700">Add to Cart</button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
