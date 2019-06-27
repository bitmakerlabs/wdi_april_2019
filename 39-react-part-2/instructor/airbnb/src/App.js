import React from 'react';
import Listing from './Listing';
import { isLVal } from '@babel/types';

function App() {

  const initialListings = [
    {
      title: 'My Home',
      description: 'Clean and modern',
      views: 105
    },
    {
      title: 'Cute Cottage',
      description: 'Cozy and cute',
      views: 50
    }
  ]

  const [listings, setListings] = React.useState(initialListings)

  const incrementViews = () => {
    setListings( (oldListings) =>
      oldListings.map( (l) => {
        return {
          title: l.title,
          description: l.description,
          views: l.views + 1
        }
      })
    )
  }

  const listingElements = listings.map( (listing, i) => 
    <Listing key={i} {...listing} />
  )

  return (
    <div className="App">
      {listingElements}
      <hr />
      <button onClick= { incrementViews } >+ Views</button>
    </div>
  );
}

export default App;
