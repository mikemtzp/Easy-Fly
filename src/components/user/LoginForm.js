import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { loginThunk } from '../../redux/users/userSlice';

const easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const LoginFrom = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string().required('Password is required!'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(loginThunk(values))
        .unwrap()
        .then(({ data }) => {
          toast.success(`Hello ${data.name}. You are successfully logged in.`);
          navigate('/');
        })
        .catch(() => {
          toast.error('You username or password is wrong!');
        });
    },
  });
  const {
    errors, touched, isSubmitting, handleSubmit, getFieldProps,
  } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            animate={animate}
          >
            <TextField
              fullWidth
              autoComplete="username"
              variant="standard"
              type="text"
              label="Enter username"
              {...getFieldProps('username')}
              error={Boolean(touched.username && errors.username)}
              helperText={touched.username && errors.username}
            />
            <TextField
              fullWidth
              autoComplete="current-password"
              variant="standard"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              {...getFieldProps('password')}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <Icon icon="eva:eye-fill" />
                      ) : (
                        <Icon icon="eva:eye-off-fill" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={animate}
          >
            <Button
              sx={{ mt: 5, fontSize: 15 }}
              fullWidth
              size="large"
              type="submit"
              color="success"
              variant="contained"
              loading={isSubmitting}
            >
              {isSubmitting ? 'loading...' : 'Login'}
            </Button>
          </Box>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default LoginFrom;
