import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { signupApi } from '../../auth-api/AuthApi';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const signupUser = {
      username,
      name,
      email,
      password,
    };
    await signupApi(signupUser);
  };

  return (
    <section>
      <form onSubmit={handleSignup}>
        <TextField
          variant="outlined"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <TextField
          variant="outlined"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
        />
        <TextField
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <TextField
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Set your password"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Signup
        </Button>
      </form>
    </section>
  );
};

export default SignupForm;
