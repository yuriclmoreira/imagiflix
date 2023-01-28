import emitter from '../../utils/eventEmitter';

import { EVENTS, IMAGEURL } from '../../data/constant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

import Score from "../Score/Score";
import { Movie } from "../../data/mock";

import "./Poster.css";
import { TitleType } from '../../App';


const Poster = ({ cover, poster_path, title, name, vote_average, id }: Movie, index: number) => {

    const handleClick = () => {
        const type = title ? TitleType.Movie : TitleType.Serie;
        emitter.emit(EVENTS.PosterClick, { type, id });
    }

    return (
        <article className="relative transition-all duration-500 ease-in-out transform hover:scale-110" key={index} onClick={handleClick}>
            <img src={poster_path ? `${IMAGEURL}/w200/${poster_path}` : cover} alt={title} />
            <div className="poster cursor-pointer absolute inset-0 w-full h-full px-4 py-8 grid place-items-center text bg-black bg-opacity-75  transition-all duration-500 ease-in-out opacity-0">
                <h2 className="text-2xl ">{title ? title : name}</h2>
                <FontAwesomeIcon icon={faPlayCircle} size="5x" />
                <Score value={vote_average} />
            </div>
        </article>
    );
};

export default Poster;