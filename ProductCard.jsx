import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://placeimg.com/640/480/tech?random=${product.id}`}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.company}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Link to={`/product/${product.id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
