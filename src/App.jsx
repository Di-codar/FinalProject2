// import React from "react";
// import { motion } from "framer-motion";
// import { ShoppingBag, Star, Mail } from "lucide-react";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-800">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
//         <div className="md:w-1/2 space-y-6">
//           <motion.h1
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-5xl font-extrabold leading-tight"
//           >
//             Welcome to <span className="text-yellow-300">ShopEase</span>
//             <br />
//             Your One-Stop Online Store
//           </motion.h1>
//           <p className="text-lg text-gray-100">
//             Trendy fashion, quality electronics, and more — all at unbeatable
//             prices!
//           </p>
//           <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
//             Start Shopping
//           </button>
//         </div>

//         <motion.img
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
//           alt="Shopping"
//           className="md:w-1/2 rounded-2xl shadow-lg mt-10 md:mt-0"
//         />
//       </section>

//       {/* Categories Section */}
//       <section className="py-16 px-6 md:px-16">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Shop by Category
//         </h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {[
//             "Men's Fashion",
//             "Women's Fashion",
//             "Electronics",
//             "Home & Living",
//             "Shoes",
//             "Beauty",
//             "Accessories",
//             "Kids",
//           ].map((category) => (
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               key={category}
//               className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:shadow-md transition"
//             >
//               <ShoppingBag className="text-purple-600 mb-4" size={40} />
//               <p className="font-semibold">{category}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Featured Products */}
//       <section className="py-16 px-6 md:px-16 bg-gray-100">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Featured Products
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//             <motion.div
//               key={item}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white rounded-xl shadow overflow-hidden"
//             >
//               <img
//                 src={`https://source.unsplash.com/random/400x400?product-${item}`}
//                 alt={`Product ${item}`}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-4 space-y-2">
//                 <h3 className="font-semibold text-lg">
//                   Stylish Product {item}
//                 </h3>
//                 <div className="flex items-center text-yellow-500">
//                   {Array(5)
//                     .fill()
//                     .map((_, i) => (
//                       <Star key={i} size={16} fill="currentColor" />
//                     ))}
//                 </div>
//                 <p className="text-purple-700 font-semibold">
//                   ₦{(item * 4500).toLocaleString()}
//                 </p>
//                 <button className="w-full mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
//                   Add to Cart
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-6 md:px-16 text-center">
//         <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               text: "Excellent service and fast delivery. Love my new sneakers!",
//               name: "Ada O.",
//             },
//             {
//               text: "Great quality products, I’ll definitely shop again!",
//               name: "John M.",
//             },
//             {
//               text: "Affordable and trendy fashion, highly recommend.",
//               name: "Tola K.",
//             },
//           ].map((review, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white shadow rounded-xl p-6"
//             >
//               <p className="text-gray-600 italic mb-3">"{review.text}"</p>
//               <p className="font-semibold text-purple-600">– {review.name}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Newsletter Signup */}
//       <section className="bg-indigo-600 py-12 text-white text-center px-6 md:px-16">
//         <Mail size={40} className="mx-auto mb-4" />
//         <h2 className="text-2xl font-bold mb-4">
//           Subscribe for Exclusive Offers
//         </h2>
//         <div className="flex flex-col sm:flex-row justify-center gap-3">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 rounded-lg w-full sm:w-80 text-gray-800"
//           />
//           <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
//             Subscribe
//           </button>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
//         © {new Date().getFullYear()} ShopEase. All rights reserved.
//       </footer>
//     </div>
//   ); 
// }
// export { Home };