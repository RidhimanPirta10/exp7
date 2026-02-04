import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 4, mt: 6 }}>
      <Typography variant="body2" align="center">© 2026 Experiment 2 — UI Design. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;