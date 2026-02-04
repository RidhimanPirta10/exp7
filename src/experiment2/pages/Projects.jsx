import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardComponent from '../components/CardComponent';

const Projects = () => {
  const projects = [
    { title: 'Portfolio Site', description: 'A personal portfolio showcasing projects and skills.', img: 'https://source.unsplash.com/random/600x360?portfolio', tags: ['React', 'MUI'] },
    { title: 'Product Landing', description: 'Landing page template for modern SaaS products.', img: 'https://source.unsplash.com/random/600x360?saas', tags: ['HTML', 'CSS'] },
    { title: 'Analytics Dashboard', description: 'Dashboard UI for charts, KPIs and insights.', img: 'https://source.unsplash.com/random/600x360?analytics', tags: ['Dashboard', 'Charts'] },
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Projects & Case Studies
        </Typography>
        <Typography color="text.secondary" paragraph>
          Explore a curated selection of example projects demonstrating design patterns, accessibility, and responsive UI.
        </Typography>
        <Button variant="contained" size="medium" href="#examples">See Examples</Button>
      </Box>

      <Grid container spacing={4} id="examples">
        {projects.map((p) => (
          <Grid item key={p.title} xs={12} sm={6} md={4}>
            <CardComponent title={p.title} description={p.description} img={p.img} />
            <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
              {p.tags.map((t) => (
                <Button key={t} size="small" variant="outlined">{t}</Button>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
