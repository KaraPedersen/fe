import React from 'react';
import CharacterList from './CharacterList';
import Header from './Header';
import styled from 'styled-components';

export default function Home(){

  return (
    <Page>
      <Header/>
      <CharacterList/>
    </Page>
  );
}

const Page = styled.div`
display: flex;
flex-direction: column;
width: 100%;`;
