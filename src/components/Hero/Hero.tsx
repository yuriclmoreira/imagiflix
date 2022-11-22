import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";

import placeholder from '../../assets/hero.jpg';

const Hero = ({ title = 'Avengers Endgame', score = 10 }) => {
    const getBorderColor = () => {
        if (score < 4) return 'border-red-400';
        if (score < 7) return 'border-yellow-400'

        return 'border-green-400';

    }

    return (
        <header className="box-border relative -mb-32 ">
            <img className="object-cover object-center h-auto  w-full" src={placeholder} alt='Filme em destaque'></img>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black">

            </div>
            <article className="absolute bottom-0 mb-32 px-8">
                <p className="text-2xl">Assista agora:</p>
                <h2 className="text-5xl font-black">{title}</h2>
                <p className="text-base my-6">Nota <span className={`inline-block mx-2 py-2 px-3 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}>{score}</span></p>

                <button className="text-base py-2 px-8 mr-2 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
                    <FontAwesomeIcon className="mr-1" icon={faPlay} /> Assistir
                </button>
                <button className="text-base py-2 px-8 mr-2 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:bg-opacity-75">
                    <FontAwesomeIcon className="mr-1" icon={faPlus} /> Minha lista
                </button>

            </article>

        </header>
    );
};
export default Hero;