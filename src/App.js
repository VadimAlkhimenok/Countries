import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { Country } from './pages/Country/Country';
import { About } from './pages/About/About';
import { Navbar } from './components/Navbar';
import { CountriesState } from './context/countries/countriesState';

function App() {
  return (
    <CountriesState>
      <BrowserRouter>
        <Navbar />
        <div className='container pt-4'>
          <Switch>
            <Route path='/' exact component={ Home }  />
            <Route path='/details/:name' component={ Country }  />
            <Route path='/about' component={ About }  />
          </Switch>
        </div>    
      </BrowserRouter>
    </CountriesState>
  );
}

export default App;
