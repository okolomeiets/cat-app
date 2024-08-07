import React, { ReactNode } from 'react';
import { useMatch, Link } from 'react-router-dom';
import { Toolbar } from '@mui/material';

interface CustomNavLinkProps {
  to: string;
  className?: string;
  children: ReactNode;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, className = '', children }) => {
  const match = useMatch(to);
  return (
    <Link to={to} className={match ? `current ${className}` : className}>
      {children}
    </Link>
  );
};

CustomNavLink.defaultProps = {
  className: '',
};

const Navigation: React.FC = () => (
  <Toolbar
    component="nav"
    variant="dense"
    sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
  >
    <CustomNavLink to="/">Home</CustomNavLink>
    <CustomNavLink to="/cats">Cats</CustomNavLink>
    <CustomNavLink to="/favourites">Favourites</CustomNavLink>
    <CustomNavLink to="/breeds">Breeds</CustomNavLink>
    <CustomNavLink to="/about">About Us</CustomNavLink>
    <CustomNavLink to="/login">My Account</CustomNavLink>
  </Toolbar>
);

export default Navigation;
