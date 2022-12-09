import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useFormik, Form, FormikProvider } from 'formik';
import {
  Stack,
  Box,
  TextField,
  IconButton,
  Button,
  InputAdornment,
} from '@mui/material';
import { toast } from 'react-toastify';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { signupThunk } from '../../redux/users/userSlice';

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

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Username required'),
    name: Yup.string()
      .min(5, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Name required'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(signupThunk(values))
        .unwrap()
        .then(() => {
          toast.success('Successfuly Registered!');
          navigate('/login');
        })
        .catch(() => {
          toast.error('Registration Failed!');
        });
    },
  });

  const {
    errors, touched, handleSubmit, isSubmitting, getFieldProps,
  } = formik;

  return (
    <section>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 60 }}
              animate={animate}
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
            >
              <TextField
                fullWidth
                label="Username"
                {...getFieldProps('username')}
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
              />

              <TextField
                fullWidth
                label="Name"
                {...getFieldProps('name')}
                error={Boolean(touched.name && errors.name)}
                helperText={touched.name && errors.name}
              />
            </Stack>

            <Stack
              spacing={3}
              component={motion.div}
              initial={{ opacity: 0, y: 40 }}
              animate={animate}
            >
              <TextField
                fullWidth
                autoComplete="email"
                type="email"
                label="Email address"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                {...getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <Icon
                          icon={
                            showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />
            </Stack>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}
            >
              <Button
                fullWidth
                sx={{ mt: 5, fontSize: 15 }}
                size="large"
                type="submit"
                color="success"
                variant="contained"
                loading={isSubmitting}
              >
                Sign up
              </Button>
            </Box>
          </Stack>
        </Form>
      </FormikProvider>
    </section>
  );
};

export default SignupForm;
