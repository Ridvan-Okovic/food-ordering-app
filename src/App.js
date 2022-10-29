import React from 'react';
import Header from './components/Layout/Header';
import MealsList from './components/Meals/MealsList';
import CartModal from './components/UI/CartModal';
import HomeCard from './components/UI/HomeCard';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
  {
    id: 'm5',
    name: 'Argeta Pašteta',
    description: 'Edin Džeko snimao reklamu za Argetu!',
    price: 1.7,
  },
];

const App = () => {
  return (
    <>
      <Header />
      <HomeCard />
      <MealsList meals={DUMMY_MEALS} />
      <CartModal />
    </>
  );
};

export default App;
