import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './NewNavBar.css'; // Your CSS file

const NewNavbar = ({ activePage, setActivePage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Hide navbar when scrolling down, show when scrolling up
        if (window.scrollY > lastScrollY) { // If the scroll position is lower than last position, user scrolled down
          setShowNavbar(false);
        } else { // If the scroll position is higher than last position, user scrolled up
          setShowNavbar(true);
        }
        // Update the last scroll position
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup the event listener
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const pages = ["Home", "Products", "Designs", "About us", "Q&A"];

  return (
    <nav className={`new-navbar ${showNavbar ? '' : 'hidden'}`}>
      
      
      <div className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {pages.map((page) => {
          const path = page === "Home" ? "/" : `/${page.toLowerCase().replace(/ & /g, '-')}`;
          return (
            <Link
              to={path}
              key={page}
              className={`nav-link ${activePage === page ? 'active' : ''}`}
              onClick={() => {
                setActivePage(page);
                setIsMobileMenuOpen(false);
              }}
            >
              {page}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NewNavbar;
