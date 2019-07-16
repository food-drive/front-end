import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

import { login } from '../../utils/apis';
import MainContext from '../../Contexts/MainContext';
import { LOGIN } from './loginActions';

import { routesMap } from '../../utils/routes-list';
import Content from '../Content';
import AppBar from '../AppBar';

const Login = () => {
  const { user } = useContext(MainContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const { state: { isLoggedIn } } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    const token = await login({ username, password });
    user.dispatch({ type: LOGIN, token });
  };
  return (
    isLoggedIn && <Redirect to={routesMap.home} />
  )
    || (
      <>
        <AppBar showMenu={false} />
        <Content>
          <form onSubmit={onSubmit}>
            <TextField
              name="username"
              value="username"
              onChange={({ target: { value } }) => setUsername(value)}
              type="text"
            />
            <TextField
              name="password"
              value="password"
              onChange={({ target: { value } }) => setPassword(value)}
              type="password"
            />
            <Button type="submit">Login</Button>
          </form>
        </Content>
      </>
    );
};

export default Login;
