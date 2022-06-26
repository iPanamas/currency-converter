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

import Converter from './Converter';
import Rates from './Rates';
import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Converter />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
    </>
  );
}
