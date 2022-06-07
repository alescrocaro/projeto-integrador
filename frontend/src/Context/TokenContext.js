import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    window.location = '/login';
  }

  function handleLogin(email = String, password = String) {
    api
      .post('/login', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);

        // salvar o id do usuario tbm!!!!!!!!!!!!
        console.log(res.data);

        api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
        setAuthenticated(true);
      })
      .catch(err => {
        console.debug('ERRO', err);
        alert('Erro ao fazer login.');
      });
  }

  return (
    <TokenContext.Provider
      value={{
        authenticated,
        setAuthenticated,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useToken() {
  const context = useContext(TokenContext);
  return context;
}
