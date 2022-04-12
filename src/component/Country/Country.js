import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, population, flags} = props.country;
    return (
        <div className='all-property'>
            <h3>{name.common}</h3>
            <p>population: {population}</p>
            <img src={flags.png} alt="flags"/>
        </div>
    );
};

export default Country;