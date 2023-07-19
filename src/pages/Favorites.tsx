import { Box, Container, Grid, Typography } from '@mui/material';
import CarCard from '../components/CarCard';
import { ICar } from '../types';
import { useCar } from '../contexts/useCarContext';

const Favorites = () => {
  const { data } = useCar();

  const filterCars = (car: ICar) => {
    return car.isFavorite === true;
  };

  const filteredCars = data.filter(filterCars);

  return (
    <Container>
      <Typography variant='h4' component='h1' align='center' gutterBottom>
        Favoritos
      </Typography>
      <Box>
        <Grid container spacing={2} >
          {filteredCars ? (
            filteredCars.map((car) => (
              <Grid key={car.id} item lg={3} md={4} sm={6} xs={12}>
                <CarCard car={car} />
              </Grid>
            ))
          ) : (
            <div>No data </div>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Favorites;
