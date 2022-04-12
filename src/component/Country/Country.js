import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>population: {props.population}</p>
        </div>
    );
};

export default Country;