import { useState } from 'react';

const useAuth = () => {
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
    if(e.target.value == 'login'){
      return fetch('https://lit-ridge-31066.herokuapp.com/api/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
        .then(res => setUser(res));
    }
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



export { useAuth };
