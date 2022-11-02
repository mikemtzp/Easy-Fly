import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container, Typography, Link, Box, Divider,
} from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import SignupForm from '../../components/user/SignupForm';
import Nav from '../../components/nav/Nav';

const RootStyle = styled('div')({
  background: 'rgb(249, 250, 251)',
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
  margin: ' auto 5%',
});

const HeadingStyle = styled(Box)({
  textAlign: 'center',
});

const ContentStyle = styled(Box)({
  maxWidth: 700,
  minWidth: 400,
  padding: 25,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#fff',
});

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const SignupPage = () => (
  <Nav>
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp} />
          <Box>
            <Box
              component="img"
              sx={{ margin: 'auto', width: 80, height: 80 }}
              src="/static/login.jpg"
              alt="logo"
            />
          </Box>

          <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
            <Typography variant="h3" sx={{ color: 'text.secondary' }}>
              Enter Your Details
            </Typography>
          </Divider>

          <SignupForm />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="h4"
            align="center"
            sx={{ mt: 3 }}
          >
            Have an account?
            {' '}
            <Link variant="h4" component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  </Nav>
);

export default SignupPage;
