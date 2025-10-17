import React, { useState, useEffect } from "react";
import { useCart } from "./Cartcontext";

const categories = ["All", "Electronics", "Fashion", "Shoes", "Accessories"];

const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 30000]);
  const { addToCart } = useCart(); // ✅ access cart context

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🛍️ OKWUTECH Online Store
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Sidebar filters */}
        <aside className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Filters</h2>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search Products
            </label>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range (₦{priceRange[0]} - ₦{priceRange[1]})
            </label>
            <input
              type="range"
              min="0"
              max="30000"
              step="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, Number(e.target.value)])}
              className="w-full"
            />
          </div>
        </aside>

        {/* Main content */}
        <main className="md:col-span-3">
          {loading ? (
            <p className="text-gray-600 text-center text-lg mt-10">
              Loading products...
            </p>
          ) : error ? (
            <p className="text-red-500 text-center text-lg mt-10">{error}</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-gray-600 text-center text-lg mt-10">
              No products match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={product.image || "https://via.placeholder.com/200"}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {product.category || "Uncategorized"}
                    </p>
                    <p className="text-blue-600 font-semibold mb-3">
                      ₦{product.price?.toLocaleString() || "N/A"}
                    </p>
                    <button
                      onClick={() => addToCart(product)} // ✅ add to cart here
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shopping;
