import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, createSession } from '../services/api';
import jwt_decode from 'jwt-decode';

export const TokenContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    console.log(token);
    console.log(recoveredUser);

    if (recoveredUser && token) {
      console.log(!!recoveredUser);
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const decode = token => {
    try {
      const data = jwt_decode(token);

      console.log('dentrodecode', data);
      return data;
    } catch (error) {
      console.log(error);
      handleLogout();
    }
  };

  const handleLogin = async (email, password) => {
    try {
      setLoading(true);
      const response = await createSession(email, password);
      console.log('response', response);

      const token = response.data.token;

      const loggedUser = decode(response.data.token);

      localStorage.setItem('user', JSON.stringify(loggedUser));
      localStorage.setItem('token', JSON.stringify(token));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(loggedUser);
      navigate('/');
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

    /* setLoading(true);
    api
      .post('/login', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        api.defaults.headers.authorization = `Bearer ${res.data.token}`;
        console.log('res.data', res);
      })
      .catch(err => {
        // TODO: Fazer tratamento dos retornos com erro
        console.debug('ERRO', err);
        // eslint-disable-next-line no-alert
        alert('Erro ao fazer login.');
      })
      .finally(() => {
        setLoading(false);
        navigate('/');
      }); */
  };

  const handleLogout = () => {
    console.log('logout');

    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.authorization = null;

    setUser(null);
    navigate('/login');
  };

  return (
    <TokenContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
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
  console.log('context', context);
  return context;
}

/* import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

const TokenContext = createContext();

export function TokenProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [isMaster, setMaster] = useState(false);
  console.log('ANTES TOKEN PROoi');

  function handleLogout() {
    setAuthenticated(false);
    // setMaster(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    window.location = '/';
  }

  const decode = token => {
    try {
      // const { isMaster: masterFlag } = JSON.parse(
      //   Buffer.from(token.split('.')[1], 'base64')
      // );
      // setMaster(masterFlag);
    } catch (error) {
      console.log(error);
      handleLogout();
    }
  };

  function handleLogin(email = String, password = String) {
    setLoading(true);
    api
      .post('/login', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        decode(res.data.token);
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
        setAuthenticated(true);
      })
      .catch(err => {
        // TODO: Fazer tratamento dos retornos com erro
        console.debug('ERRO', err);
        // eslint-disable-next-line no-alert
        alert('Erro ao fazer login.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <TokenContext.Provider
      value={{
        loading,
        authenticated,
        setAuthenticated,
        setLoading,
        handleLogin,
        handleLogout
        // isMaster,
        // setMaster
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
 */
