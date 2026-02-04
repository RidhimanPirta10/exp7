import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: in a real app we'd POST this to an API
    alert(`Thanks, ${form.name || 'there'} — message received.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Container sx={{ py: 6, display: 'flex', justifyContent: 'center' }}>
      <Paper sx={{ p: 4, width: '100%', maxWidth: 760 }} elevation={3}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
          Contact
        </Typography>
        <Typography color="text.secondary" paragraph>
          Have questions or want to collaborate? Fill out the form and we'll get back to you.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
          <TextField name="name" label="Name" variant="outlined" fullWidth value={form.name} onChange={handleChange} />
          <TextField name="email" label="Email" variant="outlined" fullWidth value={form.email} onChange={handleChange} />
          <TextField name="message" label="Message" variant="outlined" fullWidth multiline rows={4} value={form.message} onChange={handleChange} />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" type="submit">Send Message</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contact;
