import Fox from './Vladimir';
import foxData from '../Data/fox.json';

export const App = () => {
  return (
    <div>
      <Fox stats={foxData}/>
    </div>
  );
};
