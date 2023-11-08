import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import Navbar from './Navbar';
import HeaderSection from './HeaderSection';
import ProductsSection from './ProductsSection';
import SearchSection from './SearchSection';
import DesignsPage from './DesignsPage';
import theme from './Theme';
import './App.css';

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
              </>
            } />
            <Route path="/designs" element={<DesignsPage />} />
          </Routes>
        </>
      </Router>
    </ThemeProvider>
  );
}
