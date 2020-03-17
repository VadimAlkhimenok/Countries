import React from 'react';

export const CountryDetails = ({ count }) => {

    return (
        <div>
            <div>Название: { count.name }</div>
            <div>Настоящее название: { count.nativeName }</div>
            <div>Наседение: { count.population }</div>
            <div>Столица: { count.capital }</div>
            <div>Регион: { count.region }</div>
            <div>Временная зона: { count.timezones }</div>

            { /*<div>Валюта: { count.currencies }</div>*/ }

            { /*<div>Языки: { count.languages }</div>*/ }

            { /*<div>На других языках: { count.translations }</div>*/ }
            
            <div>Границы: { count.borders.map( (border, index) => <li key={index}>{border}</li> ) }</div>
            <div style={{ maxHeight: '100px' }}>
                <img src={ count.flag } alt={ count.name } />
            </div>
        </div>
    )
}