/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import { useCharacters, useFavorites } from '../../state/hooks.js';

export default function CharacterList(){
  const { characters } = useCharacters();
  const { favorites, addFavorite } = useFavorites();

  const lineItems = characters.map(char => {
    return (
      <Li key={char.id}>
        <Character image={char.image} name={char.name}/>
        {favorites.find(item => item.characterId === char.id)
          ? <Button onClick={() => addFavorite(char)} style={{ color: 'red' }}> &#9825;</Button>
          : <Button onClick={() => addFavorite(char)}> &#9825; </Button>
        }
      </Li>
    );
  });
  return <List>{lineItems}</List>;
}

const List = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-content: space-between;
margin-left: 200px;`;

const Li = styled.li`
position: relative;
margin-bottom: 10px;
`;

const Button = styled.button`
position: absolute;
bottom: 20px;
left: 20px;
height: 30px;
width: 30px;
font-size: 2rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`;
