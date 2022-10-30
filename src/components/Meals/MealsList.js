import { Card, CardContent } from '@mui/material';
import React from 'react';
import MealItem from './MealItem';

const MealsList = (props) => {
  const saveMealItemHandler = (meal) => {
    const mealItem = { id: Math.random().toString(), ...meal };
    props.onSaveCartItem(mealItem);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        style={{
          width: '60%',
          padding: '25px',
          borderRadius: '2rem',
          boxShadow: 'boxShadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25)',
        }}
      >
        <CardContent>
          {props.meals.map((meal) => (
            <MealItem
              onAddCartItem={saveMealItemHandler}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MealsList;
