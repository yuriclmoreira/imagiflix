import React, { useEffect, useState } from 'react';

import { URL, APISTRING } from './data/constant'
import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {



  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);

      const data = await response.json();

      setMovies(data.results);

    }


    fetchData();
  }, []);

  // useEffect(() => movies && console.log(movies), [movies])

  return (
    <div className=" m-auto antialiased font-sans text-white bg-black">
      {movies && <Hero {...movies[0]} />}
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </div>
  );
}

export default App;
