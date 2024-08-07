import React from 'react';
import {
  Box, Button, ButtonGroup, Container,
} from '@mui/material';
import Breeds from '../features/breeds/Breeds';

const BreedsPage = () => (
  <Container maxWidth="lg">
    <h1>Breeds</h1>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>List</Button>
      <Button>Grid</Button>
    </ButtonGroup>
    <Breeds />
  </Container>
);

export default BreedsPage;
