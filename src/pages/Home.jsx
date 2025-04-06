import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Paper 
          sx={{ 
            p: 4,
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/banner.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Banda Torroselense Estrela D'Alva
          </Typography>
          <Typography variant="h5">
            Tradição Musical desde 1888
          </Typography>
        </Paper>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Próximos Eventos
          </Typography>
          <Typography paragraph>
            Fique atento aos nossos próximos concertos e apresentações.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
