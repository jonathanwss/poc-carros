import React, { useState } from 'react';

import CarContext from './CarContext';
import { ICar } from '../types';

const carData: ICar[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    price: 45000,
    image:
      'https://i0.wp.com/www.carrosenventasv.com/wp-content/uploads/2017/09/Toyota-Corolla-S-2014-961507763-thumbnail.jpg?w=1024&ssl=1',
    isFavorite: true,
    description:
      'O Corolla é o Sedã Médio mais seguro da América Latina e já produzido pela Toyota do Brasil. Ele obteve nota máxima em segurança no Latin NCAP 2019⁶, sendo 5 estrelas para passageiros adultos e infantis, além da certificação especial Advanced Award – em que foi duplamente premiado pelo TSS⁴ (Toyota Safety Sense) junto com a plataforma global TNGA e a proteção de pedestres em caso de colisões.',
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    price: 40000,
    image:
      'https://proxy.olhardigital.com.br/wp-content/uploads/2022/07/Honda-Civic-Type-R-02.webp',
    isFavorite: false,
    description:
      'Um novo design, moderno e refinado com linhas marcantes. O Novo Civic Híbrido traz sofisticação e modernidade em todos os seus detalhes.',
  },
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'Fusca Herbie',
    year: 1966,
    price: 100000,
    image:
      'https://cdn0.casamentos.com.br/vendor/0691/3_2/960/png/untitled_13_370691-166602547414729.jpeg',
    isFavorite: false,
    description:
      'Nenhum Fusca é tão conhecido e lembrado quanto o pequeno "besouro" cor pérola que tem as listras vermelhas e azuis, além do característico número 53',
  },
  {
    id: 4,
    brand: 'Volkswagen',
    model: 'Fusca Herbie',
    year: 1966,
    price: 100000,
    image:
      'https://cdn0.casamentos.com.br/vendor/0691/3_2/960/png/untitled_13_370691-166602547414729.jpeg',
    isFavorite: false,
    description:
      'Nenhum Fusca é tão conhecido e lembrado quanto o pequeno "besouro" cor pérola que tem as listras vermelhas e azuis, além do característico número 53',
  },
  {
    id: 5,
    brand: 'Volkswagen',
    model: 'Fusca Herbie',
    year: 1966,
    price: 100000,
    image:
      'https://cdn0.casamentos.com.br/vendor/0691/3_2/960/png/untitled_13_370691-166602547414729.jpeg',
    isFavorite: false,
    description:
      'Nenhum Fusca é tão conhecido e lembrado quanto o pequeno "besouro" cor pérola que tem as listras vermelhas e azuis, além do característico número 53',
  },
];

type CarProviderProps = {
  children: React.ReactNode;
};

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
  const [data, setData] = useState<ICar[]>(carData);

  const handleFavorite = (id: number) => {
    const favoriteCar = data.find((car) => car.id === id);
    if (favoriteCar) {
      favoriteCar.isFavorite = !favoriteCar.isFavorite;
      setData([...data]);
    }
  };

  return (
    <CarContext.Provider value={{ data, handleFavorite }}>
      {children}
    </CarContext.Provider>
  );
};
