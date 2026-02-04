import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CardComponent = ({ title, description, img }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {img && <CardMedia component="img" height="140" image={img} alt={title} />}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Demo</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;