import React, { useState } from 'react';

import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Meals from '../../assets/meals.jpg';

const Header = (props) => {
  const [cartOpen, setCartOpen] = useState(false);

  const openCartHandler = () => {
    setCartOpen(true);
  };

  return (
    <>
      <header>
        <AppBar
          style={{
            background: '#e64a19',
            padding: '15px 80px',
          }}
        >
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h4" component="h1">
              ReactMeals
            </Typography>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingCartIcon />}
              onClick={openCartHandler}
              style={{
                borderRadius: '30px',
                padding: '15px 50px',
                background: 'rgba(91, 57, 70, 0.65)',
                fontSize: '18px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline' }}>
                <div style={{ marginRight: '10px' }}>Your Cart</div>
                <div
                  style={{
                    color: 'white',
                    background: '#e64a19',
                    borderRadius: '15px',
                    padding: '5px 15px',
                  }}
                >
                  0
                </div>
              </div>
            </Button>
          </Toolbar>
        </AppBar>
        <div
          style={{
            width: '100%',
            height: '25rem',
            zIndex: '0',
            overflow: 'hidden',
          }}
        >
          <img
            src={Meals}
            alt="table full of food"
            style={{
              width: '110%',
              height: '100%',
              objectFit: 'cover',
              transform: 'rotateZ(-5deg) translateY(-4rem) translateX(-1rem)',
            }}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
