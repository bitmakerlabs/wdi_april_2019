import React from 'react';


const FilmRow = ({film}) => {
    return (
        <article className="filmRow">
            <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`}></img>
            <div className="film-summary">
                <h1> {film.title}</h1>
                <p>{new Date (film.release_date).getFullYear()}</p>
            </div>
        </article>
    )
}

export default FilmRow