import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Container, Typography, Box } from '@mui/material';
import AddJetForm from '../../components/jet/AddJetForm';
import Nav from '../../components/nav/Nav';

const RootStyle = styled('div')({
  background: 'rgb(249, 250, 251)',
  height: '90vh',
  display: 'grid',
  placeItems: 'center',
  margin: ' auto 5%',
});

const HeadingStyle = styled(Box)({
  textAlign: 'center',
});

const ContentStyle = styled('div')({
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

const AddJet = () => (
  <Nav>
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Typography variant="h3" sx={{ color: 'text.secondary', mb: 5 }}>
              Add new Jet
            </Typography>
          </HeadingStyle>

          <AddJetForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  </Nav>
);

export default AddJet;
