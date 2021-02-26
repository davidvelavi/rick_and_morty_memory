import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 } from 'uuid';
import { getRandomIndex } from '../utils';

const useCharacters = (API) => {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const mapCharacters = ({ image, id }, index) => ({
    id,
    key: v4(),
    image,
    selected: false,
    position: index,
  });

  const generateRandomList = (list) => {
    const newList = [];
    while (list.length) {
      newList.push(list.splice(getRandomIndex(0, list.length), 1)[0]);
    }
    return newList;
  };
  const generateRequest = () => {
    fetch(API.replace('{}', getRandomIndex(1, 34)))
      .then((response) => response.json())
      .then(({ results }) => {
        const characterList = results.slice(0, 10);
        setCharacters(generateRandomList([...characterList, ...characterList]).map(mapCharacters));
      });
  };
  useEffect(() => {
    if (location.pathname === '/') {
      generateRequest();
    }

  }, [location]);

  return { characters, setCharacters };
};

export default useCharacters;
