import React from 'react';

const Listing = ({title, description, views}) => {

    const [faves, setFaves] = React.useState(10)

    const incrementFaves = () => {
        setFaves(faves + 1);
    }

    return (
        <div>
            <h1>{title}</h1>
            <h2>Views: {views}</h2>
            <h2>Faves: {faves}</h2>
            <p>{description}</p>
            <button onClick={ incrementFaves }>Favourite!</button>
        </div>
    )
}

export default Listing;
