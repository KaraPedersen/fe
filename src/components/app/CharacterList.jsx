import React from 'react';
import styled from 'styled-components';
import Character from './Character';
import { useCharacters } from '../../state/hooks.js';

export default function CharacterList(){
  const { characters } = useCharacters();

  const lineItems = characters.map(char => {
    return (
      <Li key={char.id}>
        <Character image={char.image} name={char.name}/>
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
margin: 25px;
`;
