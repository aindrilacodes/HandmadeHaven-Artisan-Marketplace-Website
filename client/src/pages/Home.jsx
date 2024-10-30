//import React from 'react';
import { FaPaintBrush, FaHeart, FaShopify } from 'react-icons/fa';
import bannerImage from '../assets/banner.png';

const Home = () => {
  return (
    <div className="homepage">
      {/* Banner Section */}
      <div className="relative h-96">
        <img src={bannerImage} alt="Handmade Haven Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white">
          <h1 className="text-7xl font-bold font-Agbalumo">Welcome to HandmadeHaven</h1>
          <p className="mt-2 text-2xl font-dynapuff">Your one-stop shop for unique handmade crafts and artworks!!!</p>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col md:flex-row justify-around items-center my-10 px-4">
        <div className="icon-item text-center mb-6 md:mb-0">
          <FaPaintBrush className="text-6xl text-orange-500 mx-auto" />
          <h2 className="text-xl  mt-2 font-Agbalumo">Artistry</h2>
          <p className="mt-2 text-gray-700 font-dynapuff">Explore beautiful handcrafted items created by talented artisans.</p>
        </div>
        <div className="icon-item text-center mb-6 md:mb-0">
          <FaHeart className="text-6xl text-red-500 mx-auto" />
          <h2 className="text-xl  mt-2 font-Agbalumo">Passion</h2>
          <p className="mt-2 text-gray-700 font-dynapuff">Every piece is made with love and dedication to craft.</p>
        </div>
        <div className="icon-item text-center mb-6 md:mb-0">
          <FaShopify className="text-6xl text-green-500 mx-auto" />
          <h2 className="text-xl  mt-2 font-Agbalumo">Shop Now</h2>
          <p className="mt-2 text-gray-700 font-dynapuff">Find your favorite items and support local artists.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
