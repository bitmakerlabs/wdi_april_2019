import React, {useState} from 'react';
import FilmList from './FilmListing'

const App = () => {
  const [faves, setFaves] = useState([])

  const onFaveToggle = (film) => {
    // console.log(film)
    console.log('faves' , faves)
    const filmIndex = faves.indexOf(film)
    const favesCopy = faves.slice();
    if(faves.includes(film)){
      // console.log("already inside faves list")
      favesCopy.splice(filmIndex, 1)
      setFaves(favesCopy);
    } else {
      console.log(`lets add it in, ${film.title}`)
      // favesCopy.push(film)
      // favesCopy.push(film)
      setFaves([...favesCopy, film])
    }
  
     console.log('faves list', faves)
    
  }
  return (
    <main className="film-library">\
    <div className="film-list">
      <h1 className="section-title"> Films</h1>
      <FilmList onFaveToggle={onFaveToggle} faves={faves}/>
    </div>

    <div className="film-details">
      <h1 className="section-title"> Details</h1>  
    </div>
    </main>
  );
}

export default App;
