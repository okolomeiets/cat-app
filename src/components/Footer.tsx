import React from 'react';
import {
  Container, CssBaseline, Link, Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://thecatapi.com/">
        The Cat API
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

const Footer = () => (
  <Box
    component="footer"
    className="app-footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: 'transparent',
    }}
  >
    <Container maxWidth="sm">
      <Copyright />
    </Container>
  </Box>
);

export default Footer;
