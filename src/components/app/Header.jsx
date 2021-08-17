import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Header(){
  const { state } = useLocation();

 
  return (
    <NavBar>
      <NavLink 
        to={{
          pathname: '/home',
          state: [state[0]]
        }}
        // eslint-disable-next-line max-len
        style={{ textDecoration: 'none', fontSize: '2rem', color: 'white' }}       
      > Home 
      </NavLink>
      <NavLink
        to={{
          pathname: '/favorites',
          state: [state[0]]
        }}
        style={{ textDecoration: 'none', fontSize: '2rem', color: 'white' }}  
      >
        Favorites
      </NavLink>
      <NavLink
        to="/"
        style={{ textDecoration: 'none', fontSize: '2rem', color: 'white' }}
      >
        Log Out
      </NavLink>
    </NavBar>
  );
}

const NavBar = styled.nav`
--tw-bg-opacity: 1;
background-color: rgba(110, 231, 183, var(--tw-bg-opacity));
width: 200px;
padding: 10px;
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
font-weight: bold;`;
