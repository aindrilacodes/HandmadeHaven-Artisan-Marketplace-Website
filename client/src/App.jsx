import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import KnowOurArtist from './pages/KnowOurArtist';
import SignUp from './components/SignUp';
import Cart from './pages/Cart';
import Login from "./components/Login";
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Updated path */}
        <Route path="/knowourartist" element={<KnowOurArtist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
