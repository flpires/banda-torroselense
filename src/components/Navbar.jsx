import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Banda Torroselense Estrela D'Alva
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Início
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            Sobre
          </Button>
          <Button color="inherit" component={RouterLink} to="/events">
            Eventos
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contacto
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
