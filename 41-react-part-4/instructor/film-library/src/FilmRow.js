import React from 'react';
import Fave from './Fave';

const FilmRow = ({film, handleFilmDetails, onFaveToggle}) => {


  const handleFilmDetail = () => {
    console.log(`Showing details for ${film.title}`);
    handleFilmDetails(film)

  };

  return (
    <article className="film-row" onClick={handleFilmDetail}>
      <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt={film.title} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>

      <Fave onFaveToggle={() => onFaveToggle(film)} />
    </article>
  )
};

export default FilmRow;
