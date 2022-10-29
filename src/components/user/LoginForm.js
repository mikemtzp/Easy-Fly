import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../auth-api/AuthApi';
import Nav from '../nav/Nav';

const LoginFrom = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginUser = {
      username,
      password,
    };
    const res = await loginApi(loginUser);
    if (res.status === 200) {
      localStorage.setItem('token', res.data.token);
      navigate('/');
    }
  };

  return (
    <Nav>
      <form onSubmit={handleLogin}>
        <TextField
          variant="standard"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <TextField
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
      </form>
    </Nav>
  );
};

export default LoginFrom;
