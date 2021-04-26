import React from 'react';

const Planet = ({ planet }) => {   //this is coming from data.results.map(planet =>)
    return (
        <div className="card">
            <h3>{planet.name} </h3>
            <p>Population - {planet.population}</p>
            <p>Terrain - {planet.terrain}</p>
        </div>
    );
}

export default Planet;