import React from 'react';
import { Typography } from '@mui/material';
import './App.css'; // Assume you have CSS for HeaderSection

const HeaderSection = () => {
  return (
    <div className="header-section">
      <Typography variant="h2" className="header-title">
        Minas Designs
      </Typography>
      <Typography variant="h4" className="header-subtitle">
        <i>Trendsetting fashion</i>
      </Typography>
    </div>
  );
};

export default HeaderSection;