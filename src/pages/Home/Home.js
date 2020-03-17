import React, { useContext } from 'react';
import { Card } from '../../components/Card';
import { CountriesContext } from '../../context/countries/countriesContext';
import { Loader } from '../../components/Loader';

export const Home = () => {

    const { countries, loading } = useContext( CountriesContext );
    
    return (
        <div className="card-deck row row-cols-1 row-cols-md-4 text-center">
            {
                loading 
                ? countries.map( (country, index) => (
                    <Card country={ country } key={ index } />
                ) )
                : <Loader />
            }
        </div>
    )
}
