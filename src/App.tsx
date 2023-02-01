import React, { useEffect, useState } from 'react';

import emitter from './utils/eventEmitter';
import { URL, APISTRING, EVENTS } from './data/constant'
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Modal from './components/Modal/Modal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export enum TitleType {
  Movie = 'movie',
  Serie = 'tv'
}

export interface Title {
  type: TitleType;
  id: number | string;
}


const App = () => {

  const [movies, setMovies] = useState<any[]>([]);
  const [series, setSeries] = useState<any[]>([]);
  const [title, setTitle] = useState<any>();
  const [loading, setLoading] = useState(true);


  const getFeaturedMovie = () => movies && movies[0];

  const getMovieList = () => {
    if (movies) {
      const [...movieList] = movies;
      return movieList;
    }
    return [];
  };



  const getTitle = async ({ type, id }: Title) => {
    setLoading(true);
    const title = await fetch(`${URL}/${type}/${id}${APISTRING}`)
    const titleData = await title.json();

    setTitle(titleData);
    setLoading(false);
  };

  useEffect(() => {

    emitter.addListener(EVENTS.PosterClick, getTitle);
    emitter.addListener(EVENTS.ModalClose, () => setTitle(undefined));

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

  useEffect(() => title && console.log(title), [title]);

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
      {title && <Modal{...title} />}
    </div>
  );
}

export default App;
