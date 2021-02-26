import React, { useState, useEffect } from 'react';
import { Doughnut } from '@reactchartjs/react-chart.js';
import '../assets/styles/components/Chart.scss';

const Chart = ({ game, total, defaultBackgroundColor }) => {

  const [data, setData] = useState([game]);

  useEffect(() => {
    setData({
      datasets: [{
        data: [game.movements, total],
        backgroundColor: [game.backgroundColor, defaultBackgroundColor],
      }],
      labels: [],
    });
  }, [game]);

  return (
    <div className='Chart'>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
