import React from 'react';

const Listing = ({title, description, views}) => {

    return (
        <div>
            <h1>{title}</h1>
            <h2>Views: {views}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Listing;
