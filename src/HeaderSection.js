import React, { useState } from 'react';
import { Typography } from '@mui/material';
import './App.css'; // Assume you have CSS for HeaderSection

const HeaderSection = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (event) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: event.pageX - left - window.scrollX,
      y: event.pageY - top - window.scrollY,
    });
  };

  return (
    <div
      className="header-section"
      onMouseMove={handleMouseMove}
      style={{ position: 'relative' }}
    >
      <div
        className="revealing-overlay"
        style={{
          maskPosition: `${cursorPos.x}px ${cursorPos.y}px`,
          WebkitMaskPosition: `${cursorPos.x}px ${cursorPos.y}px`, // for Safari
        }}
      />
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
