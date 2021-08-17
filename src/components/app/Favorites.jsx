import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import DetailedCharacterList from './DetailedCharacterList';

export default function Favorites(){
  return (
    <Page>
      <Header/>
      <DetailedCharacterList/>
    </Page>
  );
}

const Page = styled.div`
display: flex;
flex-direction: column;
width: 100%;`;
