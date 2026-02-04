import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Contact
      </Typography>
      <Typography color="text.secondary" paragraph>
        Have questions or want to collaborate? Send a message below.
      </Typography>
      <Box component="form" sx={{ display: 'grid', gap: 2, maxWidth: 600 }}>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" variant="outlined" fullWidth />
        <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
        <Button variant="contained">Send Message</Button>
      </Box>
    </Container>
  );
};

export default Contact;
