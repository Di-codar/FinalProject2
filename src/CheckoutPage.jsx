import React, { useState } from "react";
import { useCart } from "./Cartcontext";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    phone: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const tax = subtotal * 0.05; // 5% VAT example
  const total = subtotal + tax;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Order placed successfully!");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 text-gray-700">
        <p className="text-lg mb-4">Your cart is empty.</p>
        <Link
          to="/shopping"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Go back to Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        💳 Checkout
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* --- ORDER SUMMARY --- */}
        <div className="md:col-span-1 bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Order Summary
          </h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-3"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-14 h-14 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium text-gray-800 line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity || 1}
                  </p>
                </div>
              </div>
              <p className="text-blue-600 font-semibold">
                ₦{(item.price * 1500).toLocaleString()}
              </p>
            </div>
          ))}

          <div className="mt-6 space-y-2 text-gray-700">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>₦{(subtotal * 1500).toLocaleString()}</p>
            </div>
            <div className="flex justify-between">
              <p>VAT (5%):</p>
              <p>₦{(tax * 1500).toLocaleString()}</p>
            </div>
            <div className="border-t pt-3 flex justify-between font-semibold text-lg text-gray-900">
              <p>Total:</p>
              <p>₦{(total * 1500).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* --- BILLING FORM --- */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-6 border-b pb-2">
            Billing Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-200 outline-none"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Link
              to="/cart"
              className="text-blue-600 hover:underline font-medium"
            >
              ← Back to Cart
            </Link>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-purple-700 transition"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
