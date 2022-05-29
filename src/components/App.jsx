import Anna from "./Anna"
import anime from "../data/anime.json";
import Car from './Ihor';
import car from '../data/car.json'
import Plane from './Denys';
import plane from '../data/plane.json';
import sunrises from '../data/sunrises.json';
import Sunrises from 'components/Iryna'
import dinosaur from '../data/dinosaur'
import Lenka from './Lenka'
import Natalia  from "./Natalia";
import flowers from '../data/flower.json'


export const App = () => {
  return (
    <div>
     <Anna anime={anime}/>
    <Car images={car}/>
      <Lenka dinosaur={dinosaur}/>
     <Natalia flowers={flowers}/>
       <Sunrises sunrises={sunrises}/>
         <Plane plane={plane} />
    </div>
  );
};

export default App;
