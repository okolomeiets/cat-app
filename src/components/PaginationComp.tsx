import React from 'react';
import { Box, Pagination } from '@mui/material';
import { PaginationCompProps } from '../types';

const PaginationComp: React.FC<PaginationCompProps> = ({ currentPage, handlePageChange }) => (
  <Box display="flex" justifyContent="center" alignItems="center" className="pagination">
    <Pagination count={60} page={currentPage} siblingCount={0} boundaryCount={2} onChange={handlePageChange} size="large" />
  </Box>
);

export default PaginationComp;
