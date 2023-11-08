import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, IconButton, Button } from '@mui/material';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import './App.css'; // Make sure this CSS file contains the necessary styles

const ProductCard = ({ product, isHovered, onHoverChange, onLikeToggle, isLiked, onCardClick }) => {
    return (
        <Card
            className={`card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => onHoverChange(product.id)}
            onMouseLeave={() => onHoverChange(null)}
        >
            <CardActionArea onClick={() => onCardClick(product)}> {/* Added click handler here */}
                <div className="relative" >
                    <CardMedia
                        component="img"
                        className="card-media" // You can use this class if you want to add specific styles for the media in CSS.
                        image={product.attributes.Product_Images || '/imagenotfound.jpeg'}
                        alt={product.attributes.Product_Name}
                    />
                    <IconButton
                        className="like-button"
                        onClick={() => onLikeToggle(product.id)}
                        style={{ position: 'absolute', top: 8, right: 8 }}
                    >
                        {isLiked ? <Favorite color="secondary" /> : <FavoriteBorder />}
                    </IconButton>
                </div>
                <CardContent className="card-content">
                    <Typography gutterBottom variant="h6" component="h2">
                        {product.attributes.Product_Name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.attributes.Product_Desc.slice(0, 30)}{product.attributes.Product_Desc.length > 30 ? '...' : ''}
                    </Typography>
                    <Typography variant="subtitle1">
                        €{product.attributes.Price}
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
                        <Button className="button-class"
                            variant="outlined"
                            color="primary"
                            startIcon={<AddIcon />}
                        // onClick={() => addToCart(product.id)} // You would need to implement this functionality
                        >
                            Add to Cart
                        </Button>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;


