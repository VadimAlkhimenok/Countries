import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ country }) => {
    return (
        <div className='col-sm-4' style={{ marginTop: '15px', minWidth: '100px' }}>
            <div className='card' style={{ background: '#a1a1a1', color: '#fff' }}>
                <div style={{ height: '150px' }}>
                    <img src={ country.flag } className="card-img-top" alt={ country.name } />    
                </div>
                <ul className="list-group list-group-flush">
                    <div className="card-body">
                        <h6 className="card-title">{ country.name }</h6>
                        <Link to={ `${'/details/' + country.name}` } className="btn btn-dark" >Learn more</Link>
                    </div>
                </ul>
            </div>
        </div>
    )
};
