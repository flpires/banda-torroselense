import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';

function Contact() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Contacto
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Informações de Contacto
              </Typography>
              <Typography paragraph>
                <strong>Endereço:</strong><br />
                Rua Principal, nº 123<br />
                Torroselo, Portugal
              </Typography>
              <Typography paragraph>
                <strong>Email:</strong><br />
                info@bandatorroselense.pt
              </Typography>
              <Typography paragraph>
                <strong>Telefone:</strong><br />
                +351 123 456 789
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Envie-nos uma Mensagem
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Nome"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  required
                  type="email"
                />
                <TextField
                  fullWidth
                  label="Mensagem"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Enviar Mensagem
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Contact;
