import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardComponent from '../components/CardComponent';

const Home = () => {
  const cards = [
    { title: 'Portfolio', description: 'Showcase your skills and work with elegant cards and sections.', img: 'https://source.unsplash.com/random/400x200?portfolio' },
    { title: 'Product', description: 'Modern product landing page with feature highlights.', img: 'https://source.unsplash.com/random/400x200?product' },
    { title: 'Dashboard', description: 'Interactive and responsive dashboard UI for analytics.', img: 'https://source.unsplash.com/random/400x200?dashboard' },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Example Pages
      </Typography>
      <Grid container spacing={4}>
        {cards.map((c) => (
          <Grid item key={c.title} xs={12} sm={6} md={4}>
            <CardComponent title={c.title} description={c.description} img={c.img} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;