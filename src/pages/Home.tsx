import {  useState } from 'react';
import { Container, Typography, TextField, Grid } from '@mui/material';
import CarCard from '../components/CarCard';
import { ICar } from '../types';
import { useCar } from '../contexts/useCarContext';


const Home = () => {
  const [filter, setFilter] = useState('');
  const { data } = useCar();

  const filterCars = (car: ICar) => {
    return (
      car.brand.toLowerCase().includes(filter.toLowerCase()) ||
      car.model.toLowerCase().includes(filter.toLowerCase()) ||
      car.year.toString().includes(filter)
    );
  };
  const filteredCars = data.filter(filterCars);

  return (
    <Container>
      <Typography variant='h4' component='h1' align='center' gutterBottom>
        Lista de Carros
      </Typography>
      <TextField
        label='Filtrar por marca, modelo ou ano'
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ marginBottom: '1rem' }}
      />

      <Grid container spacing={2}>
        {filteredCars.map((car) => (
          <Grid key={car.id} item lg={3} md={4} sm={6} xs={12}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
