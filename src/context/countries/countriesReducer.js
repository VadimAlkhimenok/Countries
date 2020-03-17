import { 
    GET_COUNTRIES,
    GET_COUNTRY,
    LOADING,
} from '../types';


const handlers = {
    
    [ GET_COUNTRIES ]: ( state, {payload} ) => ({ ...state, countries: payload, loading: true }),
    [ GET_COUNTRY ]: ( state, {payload} ) => ({ ...state, country: payload, loading: true }),
    [ LOADING ]: state => ({ ...state, loading: true }),
    DEFAULT: state => state,
    // [ CLEAR_USERS ]: state => ({ ...state, users: [] }),
    
};

export const CountriesReducer = ( state, action ) => {
    const handler = handlers[ action.type ] || handlers.DEFAULT;
    return handler( state, action );
};