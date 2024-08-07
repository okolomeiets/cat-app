import React from 'react';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <CircularProgress className="spinner" style={{ color: '#d2ca17' }} />
  </Box>
);

export default Spinner;
