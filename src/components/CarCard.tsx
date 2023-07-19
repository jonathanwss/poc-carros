import React, { useContext } from 'react';
import {
  Card as Ccard,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { ICar } from '../types';
import { useNavigate } from 'react-router-dom';
import { useCar } from '../contexts/useCarContext';

interface ICarInfo {
  car: ICar;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Card = styled(Ccard)(() => ({
  transition: 'transform 0.15s ease-in-out',
  '&:hover': { transform: 'scale3d(1.02, 1.02, 1)' },
  minWidth: 250,
  height: 300,
  cursor: 'pointer',
}));

const CarCard = (props: ICarInfo) => {
  const { image, model, year, brand, price, isFavorite, id } = props.car;

  const { handleFavorite } = useCar();
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`details/${id}`)}>
      <CardMedia component='img' height='140' image={image} alt={model} />
      <CardContent>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography gutterBottom variant='h5' component='div'>
            {model}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {brand}
          </Typography>
        </Stack>
        <Typography variant='body2' color='text.secondary'>
          {year}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleFavorite(id)} size='small'>
          {isFavorite ? <StarIcon color='warning' /> : <StarOutlineIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CarCard;
