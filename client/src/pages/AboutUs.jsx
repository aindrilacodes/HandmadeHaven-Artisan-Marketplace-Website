//import React from 'react';
import { FaHandHoldingHeart, FaRecycle, FaUsers } from 'react-icons/fa';
import { FiTarget } from 'react-icons/fi';

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center py-12">
      <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header Section with Image */}
        <div className="flex flex-col items-center mb-12">
          <img
            src="https://itokri.com/cdn/shop/articles/BeFunky-collage_3.jpg?v=1670841767" 
            alt="About Us Banner"
            className="w-full rounded-lg mb-8 object-cover"
          />
          <h1 className="text-4xl  font-Agbalumo text-orange-600 text-center mb-4">About Us</h1>
          <p className="text-gray-700 text-center max-w-3xl font-dynapuff">
            At <strong>Handmade Haven</strong>, we bring together artisans and art lovers to celebrate the beauty of handmade creations. Every piece is unique and crafted with care, reflecting our dedication to quality and community.
          </p>
        </div>

        {/* Mission Section with Icon */}
        <section className="mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <FiTarget className="text-orange-400 text-3xl" />
          </div>
          <h2 className="text-2xl font-Agbalumo text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed font-dynapuff">
            Our mission is to provide a platform where creativity thrives, artisans are empowered, and customers find truly unique items that tell a story. We support sustainable practices, quality craftsmanship, and the local artisan community.
          </p>
        </section>

        {/* Our Story Section with Image */}
        <section className="mb-12 text-center">
          <img
            src="https://necessityestore.in/wp-content/uploads/2022/10/13.-India_s-Handicraft-Industry-Gaining-Momentum-10-Best-Corporate-Leaders-From-Jaipur-2021.jpg" 
            alt="Our Story"
            className="w-full rounded-lg mb-4"
          />
          <h2 className="text-2xl font-Agbalumo text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed font-dynapuff">
            Handmade Haven began with a passion for creativity and a love for unique, one-of-a-kind items. Our founders recognized the need for a space that celebrates the art of craftsmanship while supporting artisans in their journey.
          </p>
        </section>

        {/* Values Section with Icons */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-Agbalumo text-gray-800 mb-6 ">Our Values</h2>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="flex flex-col items-center">
              <FaHandHoldingHeart className="text-3xl text-orange-400 mb-2" />
              <h3 className="text-xl font-Agbalumo text-gray-800">Quality</h3>
              <p className="text-gray-600 text-center font-dynapuff">Each piece is crafted with exceptional attention to quality and detail.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUsers className="text-3xl text-orange-400 mb-2" />
              <h3 className="text-xl font-Agbalumo text-gray-800">Community</h3>
              <p className="text-gray-600 text-center font-dynapuff">We’re building connections between artisans and art lovers alike.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRecycle className="text-3xl text-orange-400 mb-2" />
              <h3 className="text-xl font-Agbalumo text-gray-800">Sustainability</h3>
              <p className="text-gray-600 text-center font-dynapuff">Using eco-friendly materials and supporting sustainable practices.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <h3 className="text-xl font-Agbalumo text-gray-800 mb-2">Discover Handmade Artistry</h3>
          <p className="text-gray-700 mb-4 font-dynapuff">Explore our collection and find something truly special.</p>
          <a
            href="/categories"
            className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition duration-200 font-dynapuff"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
