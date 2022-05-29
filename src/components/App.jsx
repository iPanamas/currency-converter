import Car from './Ihor';
import car from '../data/car.json'

export const App = () => {
  return (
    <div>
      <Car images={car}/>
    </div>
  );
};
