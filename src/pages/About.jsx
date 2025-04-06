import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

function About() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Sobre Nós
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Nossa História
              </Typography>
              <Typography paragraph>
                A Banda Torroselense Estrela D'Alva, fundada em 1888, é uma das mais antigas 
                instituições culturais da região. Ao longo de mais de um século, temos sido 
                um pilar fundamental na promoção da cultura musical em nossa comunidade.
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Nossa Missão
              </Typography>
              <Typography paragraph>
                Dedicamo-nos à formação musical, à preservação das tradições e à 
                promoção da cultura através da música. Nossa escola de música continua 
                a formar novos talentos, mantendo viva a tradição musical da região.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
