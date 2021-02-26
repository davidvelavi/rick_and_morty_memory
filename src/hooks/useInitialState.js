import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const game = {
    number: 0,
    movements: 0,
    backgroundColor: '#02afc5' };

  const resetAll = () => {
    setState({
      statistics: [],
      game });
  };

  const newGame = () => {
    setState({
      ...state,
      game,
    });
  };

  const updateGame = (payload) => {
    setState({
      ...state,
      game: {
        ...state.game,
        movements: state.game.movements + payload,
      },
    });
  };

  const updateStatistics = (payload) => {
    setState({
      ...state,
      statistics: [...state.statistics, payload],
    });
  };

  return { state, updateGame, updateStatistics, resetAll, newGame };
};

export default useInitialState;
