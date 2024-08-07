import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <Box className="home-page-content">
      <p>
        Discover the enchanting world of cats with our app! Browse captivating images, learn more about various breeds,
        and save your favorite photos to a curated list. Join a community of cat enthusiasts today!
      </p>
      <Link to="/cats">
        <Button variant="contained">Get Started</Button>
      </Link>
    </Box>
  );
};

export default HomePage;
