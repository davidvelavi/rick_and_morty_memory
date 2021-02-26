import React, { useContext } from 'react';
import '../assets/styles/components/Header.scss';
import Chart from './Chart';
import AppContext from '../containers/ContextProvider';

const Header = () => {
  const { state } = useContext(AppContext);
  const { game } = state;
  const [total, defaultBackgroundColor] = [20, '#000'];

  return (
    <header className='Header'>
      <Chart {...{ game, total, defaultBackgroundColor }} />
    </header>
  );
};

export default Header;
