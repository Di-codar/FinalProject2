import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
        <img src="Logo.jpg" alt="" />
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-purple-600">OKWU</span>TECH
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/2 bg-gray-100 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search products, brands, or categories..."
            className="flex-grow px-4 py-2 bg-transparent focus:outline-none text-gray-700"
          />
          <button className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 transition">
            <Search size={20} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="relative hover:text-purple-600 transition">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <button className="hover:text-purple-600 transition">
            <User size={24} />
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-purple-600 text-4xl font-bold text-white">
        <ul className="flex flex-wrap justify-center gap-6 py-3 text-sm md:text-base font-medium">
          <li className="hover:text-yellow-300 transition cursor-pointer">
            <Link
                to="/"
                className="hover:text-[#e81f1f] font-bold transition px-2 py-1 rounded hover:bg-rose-100"
              >
               Home
              </Link>
          </li>
          <li className="hover:text-yellow-300 transition cursor-pointer">
            <Link
                to="/Shopping"
                className="hover:text-[#e81f1f] font-bold transition px-2 py-1 rounded hover:bg-rose-100"
              >
                Shop
              </Link>
          </li>
          <li className="hover:text-yellow-300 transition cursor-pointer">
            </li>
            <Link
                to="/Categories"
                className="hover:text-[#e81f1f] font-bold transition px-2 py-1 rounded hover:bg-rose-100"
              >
                Categories
              </Link>
             
          
          
          <li className="hover:text-yellow-300 transition cursor-pointer">
            <Link
                to="/About"
                className="hover:text-[#e81f1f] font-bold transition px-2 py-1 rounded hover:bg-rose-100" 
              >
                About Us
              </Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}
          