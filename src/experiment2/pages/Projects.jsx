import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardComponent from '../components/CardComponent';

const Projects = () => {
  const projects = [
    { title: 'Portfolio Site', description: 'A personal portfolio showcasing projects and skills.', img: 'https://source.unsplash.com/random/400x200?portfolio' },
    { title: 'Product Landing', description: 'Landing page template for modern SaaS products.', img: 'https://source.unsplash.com/random/400x200?saas' },
    { title: 'Analytics Dashboard', description: 'Dashboard UI for charts, KPIs and insights.', img: 'https://source.unsplash.com/random/400x200?analytics' },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Projects
      </Typography>
      <Typography color="text.secondary" paragraph>
        A short list of example projects built with component-driven UI and accessible patterns.
      </Typography>
      <Grid container spacing={4}>
        {projects.map((p) => (
          <Grid item key={p.title} xs={12} sm={6} md={4}>
            <CardComponent title={p.title} description={p.description} img={p.img} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
