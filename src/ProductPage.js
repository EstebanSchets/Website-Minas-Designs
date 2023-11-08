import React from 'react';
import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './ProductPage.css'; // Your CSS for this component

const ProductPage = React.forwardRef(({ product, onClose }, ref) => {
  // The forwardRef is used to pass down the ref to the Box component
  if (!product) return null; // If no product is provided, don't render anything

  return (
    <Modal
      open={Boolean(product)} // The Modal is controlled by the presence of the product
      onClose={onClose}
      aria-labelledby="product-name"
      aria-describedby="product-description"
    >
      <Box // This Box is the component that can hold a ref
        ref={ref} 
        className="product-page-content"
        sx={{ /* Add styles here if necessary, for example: */
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton className="product-page-close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <img
          className="product-page-image"
          src={product.attributes.Product_Images || '/imagenotfound.jpeg'}
          alt={product.attributes.Product_Name}
        />
        <Typography id="product-name" variant="h4">
          {product.attributes.Product_Name}
        </Typography>
        <Typography id="product-description" variant="body1">
          {product.attributes.Product_Desc}
        </Typography>
        <Typography variant="h5">
          ${product.attributes.Price}
        </Typography>
        {/* Add more details as needed */}
      </Box>
    </Modal>
  );
});

ProductPage.displayName = 'ProductPage'; // Helps with debugging and React DevTools

export default ProductPage;
