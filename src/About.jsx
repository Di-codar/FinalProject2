import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About <span className="text-blue-600">OKWUTECH</span>
        </h1>

        {/* Intro */}
        <p className="text-gray-600 text-lg leading-8 mb-10 text-center max-w-3xl mx-auto">
          Welcome to <strong>OKWUTECH Online Store</strong> — your one-stop shop
          for affordable fashion, reliable tech gadgets, and quality household
          essentials. Our mission is to make online shopping simple, fast, and
          enjoyable for everyone.
        </p>

        {/* Mission and Video Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Video */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <video
              src="/super.mp4"
              className="w-full h-64 md:h-80 object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At OKWUTECH, we aim to empower every shopper with access to
              high-quality tech and lifestyle products at the best prices. We
              believe technology and style should be accessible to everyone.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>🚚 Fast & reliable delivery across the country</li>
              <li>✅ Quality assurance on every product</li>
              <li>🔒 Secure online payments</li>
              <li>💬 24/7 customer support</li>
            </ul>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="mt-20 bg-blue-600 text-white rounded-2xl p-10 text-center shadow-md">
          <h3 className="text-2xl font-semibold mb-3">
            Join the OKWUTECH Family
          </h3>
          <p className="text-blue-100 mb-6">
            Stay updated with our latest arrivals and exclusive offers.
          </p>

          <div className="flex justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 px-3 py-2 rounded-l-md text-gray-900 focus:outline-none"
            />
            <button className="bg-gray-900 px-4 py-2 rounded-r-md hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
