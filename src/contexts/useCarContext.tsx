import { useContext } from 'react';
import { ICar } from '../types';
import CarContext from './CarContext';

export const useCar = (): {
  data: ICar[];
  handleFavorite: (id: number) => void;
} => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error('useCar deve ser utilizado dentro do AuthProvider');
  }
  return context;
};
