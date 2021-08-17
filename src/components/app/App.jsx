import React from 'react';
import { Switch, Route  } from 'react-router-dom';
import Auth from './auth/Auth';
import styled from 'styled-components';
import Home from './Home';

export default function App() {
  return (
    <Body>
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/home" components={Home}/>
      </Switch>
    </Body>
  );
}

const Body = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;
