import React from 'react';

import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className=" m-auto antialiased font-sans text-white bg-black">
      <Hero/>
      <NavBar/>
    </div>
  );
}

export default App;
