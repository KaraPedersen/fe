/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useFavorites } from '../../state/hooks';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function DetailedCharacter({ image, name, charId, char }){
  const { deleteFavorite, updateFavorite } = useFavorites();
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  useEffect(() => {
    char.name = inputValue;
  }, [inputValue]);

  return (<>
    <img src={image} alt={name}/>
    <Button onClick={() => deleteFavorite(charId)}> X </Button>
    <button onClick={() => setIsEditable(prev => !prev)}> Edit </button>
    {isEditable
      ? <div>
        <input type="text" placeholder={name} value={inputValue} onChange={handleInputChange}/>
        <button onClick={() => {
          setIsEditable(prev => !prev);
          return updateFavorite(charId, char);}}> Change Name</button>
      </div>
      : <h2> {name}</h2>
    }
  </>
  );
}

const Button = styled.button`
position: absolute;
bottom: 100px;
left: 20px;
height: 30px;
width: 30px;
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;

DetailedCharacter.propTypes = {
  char: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  charId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};
