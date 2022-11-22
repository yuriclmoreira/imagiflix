import React from 'react';

import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <div className=" m-auto antialiased font-sans text-white bg-black">
      <Hero />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
