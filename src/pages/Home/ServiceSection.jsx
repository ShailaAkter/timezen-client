import React from 'react';
import { FaShippingFast, FaGem, FaHeadset } from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">Experience the finest services designed to enhance your watch shopping journey.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded shadow-lg">
            <div className="mb-4 flex justify-center items-center">
              <FaShippingFast className="text-yellow-700 text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Worldwide Shipping</h3>
            <p className="text-gray-600">We offer fast and reliable shipping to over 100 countries worldwide.</p>
          </div>

          <div className="bg-white p-8 rounded shadow-lg">
            <div className="mb-4 flex justify-center items-center">
              <FaGem className="text-yellow-700 text-4xl" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Premium Quality</h3>
            <p className="text-gray-600">All our watches are sourced from top brands and undergo rigorous quality checks.</p>
          </div>

          <div className="bg-white p-8 rounded shadow-lg">
            <div className="mb-4 flex justify-center items-center">
              <FaHeadset className="text-yellow-700 text-4xl " />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">24/7 Support</h3>
            <p className="text-gray-600">Our customer support team is available 24/7 to assist you with any inquiries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
