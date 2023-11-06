import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea, IconButton, Button } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { syncWithAlgolia } from './syncWithAlgolia';
import BGImage from './BGImage.jpg';
import './styles.css';
import SearchComponent from './SearchComponent';
import SearchIcon from '@mui/icons-material/Search'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DesignsPage from './DesignsPage'; // Import the DesignsPage component



// Create the theme outside the component to avoid re-creation on each render
const baseTheme = createTheme({
  palette: {
    ochre: {
      main: '#E3D026',
      light: '#E9DB5D',
      dark: '#A29415',
      contrastText: '#242105',
    },
  },
  // ...add other customizations
});

const theme = createTheme(baseTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: baseTheme.palette.common.black, // Set text color to black
          border: `1px solid ${baseTheme.palette.common.black}`,
          '&:hover': {
            color: baseTheme.palette.common.white, // Set text color to white on hover
            border: `1px solid ${baseTheme.palette.common.white}`, // Set border color to white on hover
            backgroundColor: baseTheme.palette.common.black, // Set background to black on hover
          },
        },
      },
    },
  },
});

export default function App() {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState({});
  const [textOpacity, setTextOpacity] = useState(1);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    // Set the background color when the component mounts
    document.body.style.backgroundColor = '#f5c802a1'; // Replace with your desired color

    // Perform the data fetching or synchronization tasks
    syncWithAlgolia();
    axios.get('http://localhost:1337/api/products?populate=*')
      .then(res => {
        setProducts(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });

    // Clean up function to reset the background color when the component unmounts or before the useEffect runs again
    return () => {
      document.body.style.backgroundColor = ''; // Reset to default or previous color
    };
  }, []); // The empty array means this effect runs once on mount and cleanup runs on unmount

  const toggleLike = (productId) => {
    setLikedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleSetActivePage = (page) => {
    setActivePage(page);
    // Other logic if necessary
  };







  const Navbar = () => {
    return (
      <div style={{
        display: 'flex',
        flexDirection: isScrolled ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 0',
        position: 'fixed',
        top: isScrolled ? '50%' : 0,
        right: isScrolled ? '1rem' : 'auto',
        transform: isScrolled ? 'translateY(-50%)' : 'none',
        width: isScrolled ? 'auto' : '100%',
        zIndex: 1000,
        background: 'transparent'
      }}>
        {["Home", "Products", "Designs", "About us", "Q&A"].map((page) => {
          const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
          const linkStyle = {
            display: 'flex', // Use Flexbox
            justifyContent: 'center', // Center horizontally
            alignItems: 'center', // Center vertically
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '50%',
            width: '80px',
            height: '80px',
            border: 'none',
            margin: '0 1rem',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
            ...(activePage === page ? {
              backgroundColor: 'black',
              color: 'white'
            } : {})
          };

          return (
            <Link
              to={path}
              key={page}
              style={linkStyle}
              onClick={() => setActivePage(page)}
            >
              {page}
            </Link>
          );
        })}
      </div>
    );
  };





  return (
    <ThemeProvider theme={theme}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                {/* Header Section */}
                <div style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BGImage})`,
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  minHeight: '100vh',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Typography variant="h2" color="white" style={{
                    fontFamily: 'Oswald, sans-serif',
                    fontSize: '10vw',
                    opacity: textOpacity
                  }}>
                    Minas Designs
                  </Typography>
                  <Typography variant="h4" color="white" style={{ paddingBottom: '20px', opacity: textOpacity }}>
                    <i>Trendsetting fashion</i>
                  </Typography>




                </div>

                {/* Search Section */}
                <div style={{ padding: '1rem' }}>
                  <SearchComponent />
                </div>

                {/* Products Section */}
                <div className="bg-white" style={{
                  padding: '0 8%',
                  margin: 'auto',
                  minHeight: '60vh'
                }}>
                  <div style={{
                    padding: '2rem 0',
                    borderRadius: '15px',
                    boxShadow: '0px 0px 15px rgba(0,0,0,0.0)'
                  }}>

                    <Grid container spacing={3} justifyContent="center" style={{ width: '80%', margin: '0 auto' }}>
                      {products.slice(0, 16).map((product) => (
                        <Grid item xs={12} sm={6} md={3} lg={3} key={product.id}>
                          <Card
                            className="card"
                            style={{
                              boxShadow: '0px 0px 15px rgba(0,0,0,0.4)',
                              transform: hoveredCardId === product.id ? 'scale(1.05)' : 'scale(1)',
                              transition: 'transform 0.3s ease-in-out'
                            }}
                            onMouseEnter={() => setHoveredCardId(product.id)}
                            onMouseLeave={() => setHoveredCardId(null)}
                          >
                            <CardActionArea>
                              <div className="relative" style={{ overflow: 'hidden', height: '250px' }}>
                                <CardMedia
                                  component="img"
                                  style={{ objectFit: 'cover', width: '100%', maxHeight: '100%', objectPosition: 'center' }}
                                  image={product.attributes.Product_Images || '/imagenotfound.jpeg'} // Use the URL directly from the Product_Images field
                                  alt={product.attributes.Product_Name}
                                />
                                <IconButton
                                  className="like-button"
                                  onClick={() => toggleLike(product.id)}
                                  style={{ position: 'absolute', top: 8, right: 8 }}
                                >
                                  {likedProducts[product.id] ? <Favorite color="secondary" /> : <FavoriteBorder />}
                                </IconButton>
                              </div>
                              <CardContent>
                                <Typography gutterBottom variant="h6" component="h2">
                                  {product.attributes.Product_Name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  {product.attributes.Product_Desc.slice(0, 30)}{product.attributes.Product_Desc.length > 30 ? '...' : ''}
                                </Typography>
                                <Typography variant="subtitle1">
                                  ${product.attributes.Price}
                                </Typography>
                                {product.attributes.Availability ? (
                                  <Typography variant="body2" style={{ color: 'green' }}>
                                    ● In Stock
                                  </Typography>
                                ) : (
                                  <Typography variant="body2" style={{ color: 'red' }}>
                                    ● Out of Stock
                                  </Typography>
                                )}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                  <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<AddIcon />}
                                    // onClick={() => addToCart(product.id)}
                                    style={{
                                      marginTop: '20px',
                                      textTransform: 'none'
                                    }}
                                  >
                                    Add to Cart
                                  </Button>
                                </div>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </>
            } />
            <Route path="/designs" element={<DesignsPage />} />



          </Routes>

        </>
      </Router>
    </ThemeProvider>
  );
}