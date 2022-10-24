import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../auth-api/AuthApi';

const LoginFrom = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };
    const res = await loginApi(loginUser);
    if (res.status === 200) {
      localStorage.setItem('token', res.data.token);
      navigate('/');
      console.log(res.data.token);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <TextField
          variant="standard"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
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
    </>
  );
};

export default LoginFrom;
