import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faGamepad, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/Footer.scss';
import AppContext from '../containers/ContextProvider';

const Footer = () => {
  const { state, resetAll, newGame } = useContext(AppContext);
  const { statistics } = state;
  const location = useLocation();

  return (
    <div className='Footer'>
      <Link to='/statistics'>
        <button type='button' className='Footer-Button' disabled={!statistics.length}>
          <FontAwesomeIcon icon={faChartArea} size='lg' />
        </button>
      </Link>

      <Link to='/'>
        <div
          role='button'
          tabIndex={0}
          className='Footer-Game'
          onClick={() => {
            newGame();
          }}
        >
          <FontAwesomeIcon icon={faGamepad} size='lg' />
        </div>
      </Link>

      <Link to='/'>
        <button
          type='button'
          className='Footer-Button'
          disabled={location.pathname === '/'}
          onClick={() => {
            resetAll();
          }}
        >
          <FontAwesomeIcon icon={faTrash} size='lg' />
        </button>
      </Link>

    </div>
  );
};

export default Footer;
