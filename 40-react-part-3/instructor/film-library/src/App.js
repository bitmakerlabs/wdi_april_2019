import React from 'react';
import FilmList from './FilmListing'

const App = () => {
  return (
    <main className="film-library">\
    <div className="film-list">
      <h1 className="section-title"> Films</h1>
      <FilmList />
    </div>

    <div className="film-details">
      <h1 className="section-title"> Details</h1>  
    </div>
    </main>
  );
}

export default App;
