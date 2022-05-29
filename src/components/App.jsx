import Natalia  from "./Natalia";
import flowers from '../data/flower.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Natalia flowers={flowers}
      />
    </div>
  );
};
