import dinosaur from '../data/dinosaur'
import Lenka from './Lenka'
import Natalia  from "./Natalia";
import flowers from '../data/flower.json'

export const App = () => {
  return (
    <div>
      <Lenka dinosaur={dinosaur}/>
     <Natalia flowers={flowers}/>
    </div>
  );
};
