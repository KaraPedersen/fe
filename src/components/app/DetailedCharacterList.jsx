/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useFavorites } from '../../state/hooks.js';
import styled from 'styled-components';
import DetailedCharacter from './DetailedCharacter.jsx';

export default function DetailedCharacterList(){
  const { favorites } = useFavorites();
  
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const listItems = favorites.map(item => {
    return (
      <Li key={item.characterId}>
        <DetailedCharacter char={item} name={item.name} charId={item.characterId} image={item.image}/>
      </Li>
    );
  });
 
  return <List> {listItems} </List>;
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
