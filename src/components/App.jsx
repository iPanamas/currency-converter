import Fox from './Vladimir';
import foxData from '../Data/fox.json';

import Anna from './Anna';
import anime from '../Data/anime.json';

import Car from './Ihor';
import car from '../Data/car.json';

import Plane from './Denys';
import plane from '../Data/plane.json';

import Sunrises from './Iryna';
import sunrises from '../Data/sunrises.json';

import Lenka from './Lenka';
import dinosaur from '../Data/dinosaur';

import Natalia from './Natalia';
import flowers from '../Data/flower.json';

export const App = () => {
  return (
    <div>
      <Fox stats={foxData} />
      <Anna anime={anime} />
      <Car images={car} />
      <Lenka dinosaur={dinosaur} />
      <Natalia flowers={flowers} />
      <Sunrises sunrises={sunrises} />
      <Plane plane={plane} />
    </div>
  );
};

export default App;
