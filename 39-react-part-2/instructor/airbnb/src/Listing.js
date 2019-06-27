import React, { useState, useEffect } from 'react';

const Listing = ({title, description, views}) => {

    const [v, setV] = useState(views)
    const [faves, setFaves] = useState(10)

    const incrementFaves = () => {
        setFaves(faves + 1);
    }

    useEffect( () => {
        setV(views)
    })

    return (
        <div>
            <h1>{title}</h1>
            <h2>Views: {v}</h2>
            <h2>Faves: {faves}</h2>
            <p>{description}</p>
            <button onClick={ incrementFaves }>Favourite!</button>
        </div>
    )
}

export default Listing;
