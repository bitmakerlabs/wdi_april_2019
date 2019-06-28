import React from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';


const FilmList = ({ onFaveToggle, faves}) => {
    
    const handleFilterClick  = () => {

    }


    const filmList = TMDB.films.map((film) => {
       return( <FilmRow film={film}  key={film.id} onFaveToggle={onFaveToggle}  />)
    })

    return (
        <div>
            <h1> Films </h1>
            <nav >
                <button>
                    All
                </button>
                <button>
                    Faves
                </button>
            </nav>
            {filmList}
        </div>
    )
}

export default FilmList