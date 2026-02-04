import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const CardComponent = ({ title, description, img }) => {
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
      {img && <CardMedia component="img" height="160" image={img} alt={title} />}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ px: 2, pb: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
          <Chip label="UI" size="small" />
          <Chip label="Responsive" size="small" />
        </Box>
        <CardActions sx={{ px: 0 }}>
          <Button size="small">Learn More</Button>
          <Button size="small">Demo</Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default CardComponent;