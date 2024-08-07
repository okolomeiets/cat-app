import React from 'react';
import { Box, Typography } from '@mui/material';
import Navigation from './Navigation';

const Header: React.FC = () => (
  <Box component="header" className="app-header">
    <Typography variant="h6" component="h1" className="logo">
      Cat App
    </Typography>
    <Navigation />
  </Box>
);

export default Header;
