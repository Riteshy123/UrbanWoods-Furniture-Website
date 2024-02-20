import React from 'react';

const Officefurniture = () => {
  
  const products = [
    {
      id: 1,
      name: "Office Chair",
      description: "Ergonomic office chair for comfortable and productive work.",
      price: "$199",
      image: "/officechair.avif",
    },
    {
      id: 2,
      name: "Desk",
      description: "Spacious desk for organizing your workspace and tasks.",
      price: "$349",
      image: "/officedesk.avif",
    },
    {
      id: 3,
      name: "Filing Cabinet",
      description: "Durable filing cabinet for organizing and storing documents.",
      price: "$149",
      image: "/filingcabinet.avif",
    },
    {
      id: 4,
      name: "Office Table",
      description: "Sturdy office table for meetings, discussions, and work tasks.",
      price: "$249",
      image: "/officetable.avif",
    },
    {
      id: 5,
      name: "Bookshelf",
      description: "Modern bookshelf to organize and display office materials.",
      price: "$199",
      image: "/Bookhelf.jpg",
    },
    {
      id: 6,
      name: "Conference Table",
      description: "Large conference table for team meetings and presentations.",
      price: "$599",
      image: "/conferencetable.avif",
    },
    {
      id: 7,
      name: "Office Sofa",
      description: "Comfortable sofa for waiting areas or informal meetings.",
      price: "$399",
      image: "/officesofa.avif",
    },
    {
      id: 8,
      name: "File Rack",
      description: "Sturdy file rack for organizing and storing important documents.",
      price: "$99",
      image: "/filerack.avif",
    },
    {
      id: 9,
      name: "Task Lamp",
      description: "Adjustable task lamp for focused lighting on your desk.",
      price: "$49",
      image: "/tasklamp.avif",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl"> Our Office Furniture Products</h2>
          <p className="mt-4 text-lg text-gray-600">Browse through our collection of high-quality office furniture</p>
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

export default Officefurniture;
