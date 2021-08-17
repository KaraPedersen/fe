import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../state/hooks.js';

export default function Auth(){
  const {
    username, 
    password, 
    changeUsername,
    changePassword,
    handleSubmit } = useAuth();

  return (
    <form
      style={{ width: '50%' }}
      onSubmit={handleSubmit}
    >
      <h1> Pick your Character </h1>
      <AuthContainer>
        <div>
          <label htmlFor="username"> Username </label>
          <TextInput
            type="text"
            name="username"
            value={username}
            onChange={changeUsername}/>
        </div>
        <div>
          <label htmlFor="password"> Password </label>
          <TextInput
            type="password"
            name="password"
            value={password}
            onChange={changePassword}/>
        </div>
        <ButtonContainer>
          <Button onClick={handleSubmit} value="login"> Log In</Button>
          <Button onClick={handleSubmit} value="signup"> Sign Up</Button>
        </ButtonContainer>
      </AuthContainer>
    </form>
  );
}

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 150pc;
  width: 100%;
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 50px;
`;

const TextInput = styled.input`
width: 50%;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 40%;
margin-bottom:25px;
`;

const Button = styled.div``;
