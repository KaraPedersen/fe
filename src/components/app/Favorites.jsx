import React from 'react';
import styled from 'styled-components';
import Header from './Header';

export default function Favorites(){
  return (
    <Page>
      <Header/>
    </Page>
  );
}

const Page = styled.div`
display: flex;
flex-direction: column;
width: 100%;`;
