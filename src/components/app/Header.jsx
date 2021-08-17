import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header(){
  return (
    <NavBar>
      <NavLink 
        to="/home"
        style={{ textDecoration: 'none', fontSize: '2rem', color: 'white' }}
      > Home 
      </NavLink>
      <NavLink
        to="/favorites"
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
