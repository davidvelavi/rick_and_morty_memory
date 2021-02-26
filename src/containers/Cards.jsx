import React, { useState, useEffect, useContext } from 'react';
import { v4 } from 'uuid';
import useCharacters from '../hooks/useCharacters';
import Card from '../components/Card';
import '../assets/styles/containers/Cards.scss';
import { deepClone } from '../utils';
import AppContext from './ContextProvider';

const API = 'https://rickandmortyapi.com/api/character/?page={}';

const Cards = () => {
  const { characters, setCharacters } = useCharacters(API);
  const [cardsSelected, setCardsSelected] = useState([]);
  const { updateStatistics, state } = useContext(AppContext);

  const updateCharacterState = (character) => {
    const charactersUpdate = characters.map((item) => {
      if (item.key === character.key) {
        return character;
      }
      return item;
    });

    setCharacters(charactersUpdate);

    if (cardsSelected.length <= 1) {
      setCardsSelected([...cardsSelected, character]);
    }
  };

  useEffect(() => {
    if (cardsSelected.length === 2) {
      const [card1, card2] = cardsSelected;
      if (card1.id !== card2.id) {
        const charactersUpdate = deepClone(characters);
        charactersUpdate[card1.position].selected = false;
        charactersUpdate[card2.position].selected = false;
        setTimeout(() => {
          setCharacters(charactersUpdate);
        }, 400);
      }
      setCardsSelected([]);
    }
  }, [cardsSelected]);

  useEffect(() => {
    if (characters.length && characters.every((item) => item.selected === true)) {
      updateStatistics({
        ...state.game,
        number: state.statistics.length + 1,
        key: v4(),
      });
    }
  }, [characters]);

  return (
    <div className='Cards'>
      {
        characters && characters.map((character) => (
          <Card
            key={character.key}
            character={character}
            updateCharacterState={updateCharacterState}
          />
        ))
      }
    </div>
  );
};

export default Cards;
