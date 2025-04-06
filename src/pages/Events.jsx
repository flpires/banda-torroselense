import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid } from '@mui/material';

function Events() {
  const events = [
    {
      title: 'Concerto de Primavera',
      date: '15 de Abril, 2025',
      location: 'Auditório Municipal',
      description: 'Concerto tradicional de primavera com repertório variado.'
    },
    {
      title: 'Festival de Bandas',
      date: '1 de Junho, 2025',
      location: 'Praça Central',
      description: 'Participação no festival anual de bandas filarmónicas.'
    },
    {
      title: 'Concerto de Natal',
      date: '20 de Dezembro, 2025',
      location: 'Igreja Matriz',
      description: 'Concerto especial com repertório natalino.'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Eventos
        </Typography>
        
        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {event.title}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    {event.date}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
                    {event.location}
                  </Typography>
                  <Typography variant="body2">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Events;
