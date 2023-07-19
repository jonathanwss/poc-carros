import { createContext } from 'react';
import { ICar } from '../types';

const CarContext = createContext<{
  data: ICar[];
  handleFavorite: (id: number) => void;
}>({
  data: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleFavorite: () => {},
});

export default CarContext;
