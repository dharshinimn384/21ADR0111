import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductDetails = ({ product }) => {
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
          {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Availability: {product.availability}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
