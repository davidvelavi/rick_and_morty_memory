import React, { useState, useEffect } from 'react';
import '../assets/styles/components/Card.scss';
import classnames from 'classnames';
import frontImage from '../assets/images/cover1.png';

const Card = ({ character, updateCharacterState }) => {
  const { image } = character;

  const [selected, setSelected] = useState(false);
  const backImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const fromImageStyle = { ...backImageStyle, ...{ backgroundImage: `url(${frontImage})` } };
  const handleClick = () => {
    const _selected = true;
    setSelected(_selected);
    updateCharacterState({ ...character, selected: _selected });
  };

  useEffect(() => {
    setSelected(character.selected);
  }, [character.selected]);

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
