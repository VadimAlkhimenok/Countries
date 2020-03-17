import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { CountriesContext } from './countriesContext';
import { CountriesReducer } from './countriesReducer';
import { GET_COUNTRIES, GET_COUNTRY, LOADING } from '../types';

export const CountriesState = ({ children }) => {

    const initialState = {
        country: {},
        countries: [],
        loading: false,
    }

    const [state, dispatch] = useReducer( CountriesReducer, initialState );
    const { country, countries, loading } = state;

    const showAllCountries = async value => {

        //... запрос на сервер 
        const response = await axios.get(
            `https://restcountries.eu/rest/v2/${ value }`
        );

        dispatch({
            type: GET_COUNTRIES,
            payload: response.data,
        })
    };

    useEffect( () => {
        showAllCountries( 'all' );
    }, [] );

    const showCountry = async name => {

        //... запрос на сервер 
        const response = await axios.get(
            `https://restcountries.eu/rest/v2/name/${ name }`
        );

        dispatch({
            type: GET_COUNTRY,
            payload: response.data,
        })
    }

    const setLoading = () => dispatch({ type: LOADING });

    return (
        <CountriesContext.Provider value={{
            country, countries, loading, setLoading, showAllCountries, showCountry
        }}>
            { children }
        </CountriesContext.Provider>
    )
}