import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Navbar from './Navbar';
import HeaderSection from './HeaderSection';
import ProductsSection from './ProductsSection';
import SearchSection from './SearchSection';
import ImageGridSection from './ImageGridSection'
import DesignsPage from './DesignsPage';
import theme from './Theme';
import './App.css';
import RealProductPage from './RealProductPage';
import Footer from './Footer'; 

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <HeaderSection />
                <SearchSection />
                <ProductsSection />
                <ImageGridSection/>
              </>
            } />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/products" element={<RealProductPage />} />
          </Routes>
          <Footer /> {}
        </>
      </Router>
    </ThemeProvider>
  );
}
