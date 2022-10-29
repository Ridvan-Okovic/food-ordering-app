import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const HomeCard = () => {
  return (
    <div
      style={{
        position: 'relative',
        top: '-7rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        style={{
          width: '40%',
          padding: '2rem',
          background: '#282828',
          borderRadius: '20px',
          textAlign: 'center',
          boxShadow: '0 1px 18px 10px rgba(0, 0, 0, 0.25)',
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{ color: '#fff', marginBottom: '20px', fontStyle: 'bold' }}
          >
            Delicious food , delivered to you
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
            Choose your favourite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </Typography>
          <Typography variant="h6" sx={{ color: '#fff' }}>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomeCard;
