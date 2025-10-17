import React from "react";
import { useCart } from "./Cartcontext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * 1500,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🛒 Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
          <Link
            to="/shopping"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            ← Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-3"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-blue-600 font-medium">
                    ₦{(item.price * 1500).toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Total:</h2>
            <p className="text-2xl font-semibold text-purple-700">
              ₦{totalPrice.toLocaleString()}
            </p>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Clear Cart
            </button>
            <Link
              to="/checkout"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
