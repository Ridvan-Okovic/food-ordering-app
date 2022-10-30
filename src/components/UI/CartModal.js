import React from 'react';
import CartMealItem from '../Cart/CartMealItem';

import { Button, ButtonGroup } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const CartModal = (props) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-full w-full backdrop-blur-sm backdrop-brightness-50 z-10"
        onClick={props.onClose}
      />
      <div className="fixed w-4/12 bg-white rounded-xl top-1/3 flex flex-col left-1/3 overflow-hidden z-20">
        {props.cartItem.map((meal) => {
          return (
            <CartMealItem
              name={meal.name}
              price={meal.price}
              amount={meal.amount}
              key={meal.id}
            />
          );
        })}
        <footer className="flex justify-center mr-5 py-4">
          <ButtonGroup>
            <Button
              onClick={props.onClose}
              style={{
                borderRadius: '10px 0 0 10px',
                padding: '10px 10px',
                background: '#fff',
                border: '1px solid #8b3f37',
                color: '#8b3f37',
                fontSize: '12px',
                width: '100px',
              }}
              endIcon={<CancelIcon />}
            >
              Close
            </Button>
            <Button
              variant="contained"
              style={{
                borderRadius: '0 10px 10px 0',
                padding: '10px 10px',
                background: '#8b3f37',
                fontSize: '12px',
                width: '100px',
              }}
              endIcon={<TaskAltIcon />}
            >
              Order
            </Button>
          </ButtonGroup>
        </footer>
      </div>
    </>
  );
};

export default CartModal;
