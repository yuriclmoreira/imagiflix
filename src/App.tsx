import React, { useEffect, useState } from 'react';

import { URL, APISTRING } from './data/constant'
import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';


const App = () => {

  const [movies, setMovies] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {

      const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`);
      const moviesData = await movies.json();
      setMovies(moviesData.results);


      const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`);
      const seriesData = await series.json();
      setSeries(seriesData.results);

      setLoading(false);
    };


    fetchData();
  }, []);

  // useEffect(() => movies && console.log(movies), [movies])

  const getFeaturedMovie = () => movies && movies[0];

  const getMovieList = () => {
    if (movies) {
      const [...movieList] = movies;
      return movieList;
    }
    return [];
  };


  return (
    <div className=" m-auto antialiased font-sans text-white bg-black">
      {(loading) && (
        <>
          <Loading />
          <NavBar />
        </>
      )}

      {!loading && (
        <>
          <Hero {...getFeaturedMovie()} />
          <NavBar />
          <Carousel title='Filmes Populares' data={getMovieList()} />
          <Carousel title='Séries Populares' data={series} />
          <Carousel title='Placeholder' />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
