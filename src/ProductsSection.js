import React, { useState, useEffect } from 'react';
import { Grid, Modal } from '@mui/material';
import ProductCard from './ProductCard';
import ProductPage from './ProductPage'; // Import the product detail view
import { fetchProducts } from './api';
import './App.css';

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [likedProducts, setLikedProducts] = useState({});

  const [productPageOpen, setProductPageOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to open the product detail page/modal
  const handleOpenProductPage = (product) => {
    setSelectedProduct(product);
    setProductPageOpen(true);
  };

  // Function to close the product detail page/modal
  const handleCloseProductPage = () => {
    setProductPageOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      
      // Filter and sort the productsData
      const filteredAndSortedProductsData = productsData
        .filter(product => product.attributes.Product_ID.toLowerCase().includes('promo'))
        .sort((a, b) => {
          const numberA = parseInt(a.attributes.Product_ID.split('_')[1], 10);
          const numberB = parseInt(b.attributes.Product_ID.split('_')[1], 10);
          return numberA - numberB;
        });
      
      setProducts(filteredAndSortedProductsData);
    };
  
    getProducts();
  }, []);

  const toggleLike = (productId) => {
    setLikedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };



  return (
    
    <div className="products-section">
      
      <Grid container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={6} lg={3} key={product.objectID}>
            <ProductCard
              product={product}
              isHovered={hoveredCardId === product.objectID}
              onHoverChange={setHoveredCardId}
              onLikeToggle={() => toggleLike(product.objectID)}
              isLiked={likedProducts[product.objectID]}
              onCardClick={handleOpenProductPage} // Pass the function to handle card click
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        open={productPageOpen}
        onClose={handleCloseProductPage}
      // ... other modal props as needed
      >
        <div>
          <ProductPage product={selectedProduct} onClose={handleCloseProductPage} />
        </div>
      </Modal>
    </div>
  );
};

export default ProductsSection;
