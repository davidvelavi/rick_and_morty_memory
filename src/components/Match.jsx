import React from 'react';
import '../assets/styles/components/Match.scss';

const Match = ({ children, title }) => {
  return (
    <div className='Match'>
      <div className='Match-Header'>
        Partida número
        {' '}
        <span className='Match-Number'>
          #
          {' '}
          {title}
        </span>
      </div>
      <div className='Match-Body'>
        {children}
      </div>
    </div>
  );
};

export default Match;
