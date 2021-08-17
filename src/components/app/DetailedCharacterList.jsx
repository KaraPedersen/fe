import React from 'react';
import { useFavorites } from '../../state/hooks.js';

export default function DetailedCharacterList(){
  const { favorites } = useFavorites();

  const listItems = favorites.map(item => {
    <h1 key={item.characterId}> {item.name} </h1>;
  });
  return <div> {listItems} </div>;
}
