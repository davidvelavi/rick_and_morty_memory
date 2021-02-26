import React, { useState, useEffect, useContext } from 'react';
import '../assets/styles/components/Card.scss';
import classnames from 'classnames';
import frontImage from '../assets/images/cover.png';
import AppContext from '../containers/ContextProvider';

const Card = ({ character, updateCharacterState }) => {
  const { image, selected } = character;

  const { updateGame } = useContext(AppContext);

  const backImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const fromImageStyle = { ...backImageStyle, ...{ backgroundImage: `url(${frontImage})` } };

  const handleClick = () => {
    if (!selected) {
      const _selected = true;
      const _character = JSON.parse(JSON.stringify(character));
      updateCharacterState({ ..._character, selected: _selected });
      updateGame(1);
    }
  };

  return (
    <div
      className={`Card ${classnames({ selected })}`}
      onClick={handleClick}
      role='button'
      tabIndex={0}
    >
      <div className='Card-frontImage' style={fromImageStyle} />
      <div className='Card-backImage' style={backImageStyle} />
    </div>
  );
};

export default Card;
