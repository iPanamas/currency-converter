import Navigation from 'components/Navigation/Navigation';
import s from './AppBar.module.css';
const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
    </header>
  );
};

export default AppBar;
