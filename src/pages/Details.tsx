import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useCar } from '../contexts/useCarContext';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const style = {
  width: '80%',
  minWidth: 318,
  //height: '100%',
  bgcolor: 'background.paper',
  border: '1px solid #f3f3f3',
  borderRadius: 5,
  boxShadow: 24,
  overflow: 'auto',
};

const Details = () => {
  const [open, setOpen] = useState(true);

  const { data, handleFavorite } = useCar();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    navigate(-1);
  };

  const currentCar = data.find((car) => car.id === Number(id));

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          overflow: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={style}>
          <Card sx={{ minWidth: 318, width: '100%', borderRadius: 5, }}>
            <Grid container spacing={2}>
              <Grid item md={6} sm={12}>
                <CardMedia
                  component='img'
                  sx={{ width: '100%', height: '100%' }}
                  image={currentCar?.image}
                  alt={currentCar?.model}
                  
                />
              </Grid>
              <Grid item md={6} sm={12}>
                <Stack spacing={2} sx={{ p: 3, width: '100%' }}>
                  <Stack
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                    direction='row'
                  >
                    <Box>
                      <Typography variant='caption' lineHeight={0.2}>
                        Modelo
                      </Typography>
                      <Typography variant='h6' lineHeight={1}>
                        {currentCar?.model}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant='caption' lineHeight={0.2}>
                        Marca
                      </Typography>
                      <Typography variant='h6' lineHeight={1}>
                        {currentCar?.brand}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box>
                    <Typography variant='caption' lineHeight={0.2}>
                      Ano
                    </Typography>
                    <Typography variant='h6' lineHeight={1}>
                      {currentCar?.year}
                    </Typography>
                  </Box>
                  <Divider />
                  <Box sx={{ height: 250,           overflow: 'auto',
  }}>
                    <Typography variant='caption'>Descrição</Typography>
                    <Typography
                      variant='body1'
                      lineHeight={1.5}
                      textAlign='justify'
                    >
                      {currentCar?.description}
                    </Typography>
                  </Box>

                  <Stack
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}
                    direction='row'
                  >
                    <Box>
                      <Typography variant='subtitle1' lineHeight={1}>
                        Preço
                      </Typography>
                      <Typography variant='h4' lineHeight={1.5}>
                        R$ {Number(currentCar?.price).toFixed(2)}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => handleFavorite(Number(currentCar?.id))}
                      //size='small'
                      sx={{ width: 30, height: 30 }}
                    >
                      {currentCar?.isFavorite ? (
                        <StarIcon sx={{ width: 24 }} color='warning' />
                      ) : (
                        <StarOutlineIcon sx={{ width: 24 }} />
                      )}
                    </IconButton>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Modal>
    </div>
  );
};

export default Details;
