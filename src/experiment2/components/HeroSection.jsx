import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const HeroSection = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
          Build Modern Interfaces with Component Libraries
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          This example uses Material UI to demonstrate structure, responsiveness, and accessible UI patterns.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" size="large" sx={{ mr: 2 }}>Get Started</Button>
          <Button variant="outlined" size="large">Learn More</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;