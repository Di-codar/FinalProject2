import React from "react";
const categories = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500" },
  { name: "Fashion", image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=500" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1584735175317-9a98b99c3cbe?w=500" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1611080626767-56e06cc08fb3?w=500" },
  { name: "Home & Living", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500" },
  { name: "Beauty & Care", image: "https://images.unsplash.com/photo-1596464716121-9d2d36ff7a8c?w=500" },
  { name: "Kids", image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=500" },
  { name: "Gadgets", image: "https://images.unsplash.com/photo-1580894894513-481d5d16b84f?w=500" },
];

const Categories = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🗂️ Shop by Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {cat.name}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Explore the best in {cat.name.toLowerCase()}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
