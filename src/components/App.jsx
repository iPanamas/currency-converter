import sunrises from '../data/sunrises.json';
import Sunrises from 'components/Iryna'


export const App = () => {
  return (
    <div 
    >
      <Sunrises sunrises={sunrises}/>
    </div>
  );
};
