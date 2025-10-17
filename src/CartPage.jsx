import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function CartPage() {
  
  const cartItems = [];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <ShoppingCart className="text-purple-600" size={28} />
          OKWUTECH <span className="text-purple-600">Cart</span>
        </h1>
        <Link
          to="/Shopping"
          className="flex items-center text-purple-600 hover:text-purple-800 transition"
        >
          <ArrowLeft size={18} className="mr-1" /> Continue Shopping
        </Link>
      </div>

      
      {cartItems.length === 0 && (
        <div className="text-center py-24">
          <ShoppingCart size={60} className="mx-auto text-gray-400 mb-6" />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven’t added any items yet.
          </p>
          <Link
            to="/Shopping"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
}
