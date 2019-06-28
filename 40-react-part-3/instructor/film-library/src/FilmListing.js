import React from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';


const FilmList = () => {
    return (
        <div>
            {TMDB.films.map((film) => {
               return( <FilmRow film={film}  key={film.id} />)
            })}
        </div>
    )
}

export default FilmList