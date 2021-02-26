import React, { useContext } from 'react';
import AppContext from './ContextProvider';
import Chart from '../components/Chart';
import Match from '../components/Match';
import '../assets/styles/containers/Statistics.scss';

const Statistics = () => {
  const { state } = useContext(AppContext);
  const { statistics } = state;
  const [total, defaultBackgroundColor] = [20, '#000'];
  return (
    <div className='Statistics'>
      {
        statistics.length && statistics.map((game) => (
          <Match title={game.number} key={game.key}>
            <Chart {...{ game, total, defaultBackgroundColor }} />
          </Match>

        ))
      }
    </div>
  );
};

export default Statistics;
