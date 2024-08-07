import React from 'react';
import { Container } from '@mui/material';
import BreadDetails from '../features/breeds/BreedDetails';

const BreedDetailPage = () => (
  <Container maxWidth="lg">
    <h1>Breeds Detail Page</h1>
    <BreadDetails />
  </Container>
);
export default BreedDetailPage;
