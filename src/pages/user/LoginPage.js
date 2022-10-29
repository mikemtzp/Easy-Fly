import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container, Typography, Link, Box,
} from '@mui/material';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import LoginFrom from '../../components/user/LoginForm';
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

const ContentStyle = styled('div')({
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
    y: 60,
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

function LoginPage() {
  return (
    <Nav>
      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <HeadingStyle component={motion.div} {...fadeInUp}>
              <Box>
                <Box
                  component="img"
                  sx={{ width: 80, height: 80 }}
                  src="/static/login.jpg"
                  alt="logo"
                />
              </Box>

              <Typography variant="h3" sx={{ color: 'text.secondary', mb: 5 }}>
                Login to your account
              </Typography>
            </HeadingStyle>

            <LoginFrom />

            <Typography
              component={motion.p}
              {...fadeInUp}
              variant="h5"
              align="center"
              sx={{ mt: 3 }}
            >
              Don’t have an account?
              {' '}
              <Link variant="h4" component={RouterLink} to="/signup">
                Sign up
              </Link>
            </Typography>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Nav>
  );
}

export default LoginPage;
