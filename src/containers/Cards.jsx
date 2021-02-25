import React, { useState, useEffect } from 'react';
import useCharacters from '../hooks/useCharacters';
import Card from '../components/Card';
import '../assets/styles/containers/Cards.scss';
import { getRandomIndex } from '../utils';

const API = `https://rickandmortyapi.com/api/character/?page=${getRandomIndex(1, 34)}`;

const Cards = () => {
  const { characters, setCharacters } = useCharacters(API);
  const [cardsSelected, setCardsSelected] = useState([]);

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
      const charactersUpdate = JSON.parse(JSON.stringify(characters));

      if (card1.id !== card2.id) {
        charactersUpdate[card1.position].selected = false;
        charactersUpdate[card2.position].selected = false;
      }

      setTimeout(() => {
        setCharacters(charactersUpdate);
      }, 400);
      setCardsSelected([]);
    }
  }, [cardsSelected]);

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
