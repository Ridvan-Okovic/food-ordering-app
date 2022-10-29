import { Card, CardContent } from '@mui/material';
import React from 'react';
import MealItem from './MealItem';

const MealsList = (props) => {
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
          {props.meals.map((mealItem) => (
            <MealItem
              key={mealItem.id}
              name={mealItem.name}
              description={mealItem.description}
              price={mealItem.price}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default MealsList;
