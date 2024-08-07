import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import FavouritesPage from './pages/FavouritesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CatsList from './features/catsList/CatsList';
import AboutUsPage from './pages/AboutUsPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import BreedsPage from './pages/BreedsPage';
import BreedDetailsPage from './pages/BreedDetailsPage';

function App() {
  const location = useLocation();

  const getPageClassName = () => {
    switch (location.pathname) {
      case '/': return 'home-page';
      case '/cats': return 'cats-page';
      case '/favourites': return 'favourites-page';
      case '/breeds': return 'breeds-page';
      case '/about': return 'about-us-page';
      case '/login': return 'login-page';
      default:
        if (location.pathname.startsWith('/breed/')) {
          return 'breed-details-page';
        }
        return 'default-page';
    }
  };

  return (
    <div className={getPageClassName()}>
      <Header />
      <Box className="content-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cats" element={<CatsList />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/breeds" element={<BreedsPage />} />
          <Route path="/breed/:breedId" element={<BreedDetailsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
