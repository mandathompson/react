import React from 'react';
import { useQuery } from 'react-query'
import Planet from './Planet'


const fetchPlanets = async () => {
    const res = await fetch('http://swapi.dev/api/planets/')
    return res.json();
}



const Planets = () => {
    const { data, status } = useQuery('planets', fetchPlanets) //passing in an ID and an asynchronous function
    //^data is giving us the res.json from above function, it's fetched once but logged multiple times due to the component render
    console.log(data)
    return (
        <div>
            <h2>Planets</h2>
            {status === 'loading' && (
                <div>Loading data...</div>
            )}

            {status === 'error' && (
                <div>An error occured while fetching data</div>
            )}

            {status === 'success' && (
                <div>
                    { data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                </div>
            )}
        </div>
    );
}

export default Planets;
