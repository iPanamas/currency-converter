import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Converter</NavLink>
      <NavLink to="/rates">Rates</NavLink>
    </nav>
  );
};

export default Navigation;
