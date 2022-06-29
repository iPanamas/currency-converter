/* import Fox from './Vladimir';
import foxData from '../data/fox.json';

import Anna from './Anna';
import anime from '../data/anime.json';

import Car from './Ihor';
import car from '../data/car.json';

import Plane from './Denys';
import plane from '../data/plane.json';

import Sunrises from './Iryna';
import sunrises from '../data/sunrises.json';

import Lenka from './Lenka';
import dinosaur from '../data/dinosaur';

import Natalia from './Natalia';
import flowers from '../data/flower.json'; */
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// API
import fetchUserCurrency from 'service/currencyAPI';

// Components
import Converter from './Converter/Converter';
import Rates from './Rates/Rates';
import AppBar from './AppBar/AppBar';
import Container from './Container/Container';
export default function App() {
  const [userCurrency, setUserCurrency] = useState('');

  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
        const lat = position?.coords?.latitude;
        const lon = position?.coords?.longitude;
        fetchUserCurrency(lat, lon).then(result => setUserCurrency(result));
      });
    }
  }, []);

  return (
    <>
      <AppBar />
      <Container>
        <Routes>
          <Route path="/" element={<Converter currency={userCurrency} />} />
          <Route
            path="/rates"
            element={
              <Rates
                currency={userCurrency}
                setUserCurrency={setUserCurrency}
              />
            }
          />
        </Routes>
      </Container>
    </>
  );
}
