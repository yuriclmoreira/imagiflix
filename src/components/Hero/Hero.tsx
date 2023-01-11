import React from "react";
import { IMAGEURL } from '../../data/constant';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

import Score from "../Score/Score";

import placeholder from '../../assets/hero.jpg';

const Hero = ({ backdrop_path = null, title = 'Avengers Endgame', vote_average = 10 }) => {


    return (
        <header className="box-border relative -mb-16 ">
            <img className="object-cover object-center h-auto  w-full" src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder} alt='Filme em destaque'></img>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black">

            </div>
            <article className="absolute bottom-0 mb-32 px-8">
                <p className="text-2xl">Assista agora:</p>
                <h2 className="text-5xl font-black">{title}</h2>
                <p className="text-base my-6">Nota{' '} <Score value={vote_average} /></p>

                <button className="text-base py-2 px-8 mr-2 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
                    <FontAwesomeIcon className="mr-1" icon={faPlay} /> Assistir
                </button>
                <button className="text-base py-2 px-8 mr-2 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
                    <FontAwesomeIcon className="mr-1" icon={faPlus} /> Minha lista
                </button>

            </article>

        </header>
    )
};

export default Hero;