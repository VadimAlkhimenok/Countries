import React, { useContext, useEffect } from 'react';
import { CountriesContext } from '../../context/countries/countriesContext';
import { Loader } from '../../components/Loader';
import { CountryDetails } from '../../components/CountryDetails';


export const Country = ({ match }) => {

    const { country, loading, showCountry } = useContext( CountriesContext );
    const urlName = match.params.name;

    useEffect( () => {
        showCountry( urlName );
    }, [] );

    
    return (
        <div className="card-deck row row-cols-1 row-cols-md-4 text-center">
            {
                loading 
                ? country.map( (count, index) => (
                    <CountryDetails count={ count } key={ index } />
                ) )
                : <Loader />
            }
        </div>
    )
}