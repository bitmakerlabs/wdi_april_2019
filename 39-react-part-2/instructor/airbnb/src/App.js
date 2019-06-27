import React from 'react';
import Listing from './Listing';

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

  const listingElements = initialListings.map( (listing, i) => 
    <Listing key={i} {...listing} />
  )

  return (
    <div className="App">
      {listingElements} 
    </div>
  );
}

export default App;
