/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useAuth = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const changeUsername = ({ target }) => {
    return setUsername(target.value);
  };

  const changePassword = ({ target }) => {
    return setPassword(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    return fetch(`https://lit-ridge-31066.herokuapp.com/api/auth/${e.target.value}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(res => setUser(res))
      .then(() => history.push('/home'));
   
  };


  return { 
    username, 
    password, 
    user,
    changeUsername, 
    changePassword, 
    handleSubmit
  };
};

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    return fetch('https://lit-ridge-31066.herokuapp.com/characters/all')
      .then(res => res.json())
      .then(res => setCharacters(res));
  }, []);

  return { characters };
};


export { useAuth, useCharacters };
