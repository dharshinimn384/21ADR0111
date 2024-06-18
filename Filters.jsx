import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem } from '@mui/material';

const Filters = ({ categories, companies, onFilterChange }) => {
  const [category, setCategory] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [availability, setAvailability] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ category, company, rating, priceRange, availability });
  };

  return (
    <Box display="flex" justifyContent="space-between" mb={2}>
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        variant="outlined"
        margin="normal"
      >
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        variant="outlined"
        margin="normal"
      >
        {companies.map((comp) => (
          <MenuItem key={comp} value={comp}>
            {comp}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        label="Price Range"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <TextField
        select
        label="Availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        variant="outlined"
        margin="normal"
      >
        <MenuItem value="In Stock">In Stock</MenuItem>
        <MenuItem value="Out of Stock">Out of Stock</MenuItem>
      </TextField>
      <Button onClick={handleFilterChange} variant="contained" color="primary" margin="normal">
        Apply
      </Button>
    </Box>
  );
};

export default Filters;
