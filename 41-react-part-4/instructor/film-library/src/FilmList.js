import React, {useState} from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';


const FilmList = ({films, faves, onFaveToggle, handleFilmDetails}) => {


  const [filter, setFilter] = useState('all');

  const handleFilterToggle = (filter) => {

    console.log(`Setting filter to ${filter}`);
    setFilter(filter)
  }


  const AllFilms = filter === 'faves' ? faves : TMDB.films


  const filmList = AllFilms.map((film) => {
    return (
      <FilmRow film={film} key={film.id} onFaveToggle={onFaveToggle} handleFilmDetails={handleFilmDetails} />
    );
  });

  return (
    <section className="film-list">
      <h1 className="section-title">FILMS</h1>

      <nav className="film-list-filters" >
        <button className="film-list-filter" onClick={() => handleFilterToggle('all')}>
          ALL
          <span className="section-count">{filmList.length}</span>
        </button>
        <button className="film-list-filter" onClick={() => handleFilterToggle('faves')}>
          FAVES
          <span className="section-count">{faves.length}</span>
        </button>
      </nav>


      {filmList}
    </section>
  );
};

export default FilmList;
