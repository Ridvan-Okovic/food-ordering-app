import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';

const MealItem = (props) => {
  const [amount, setAmount] = useState('1');

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const onAddMealHandler = () => {
    const mealItem = {
      key: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    };

    props.onAddCartItem(mealItem);
    setAmount('1');
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Typography variant="h5" gutterBottom style={{}}>
            <b>{props.name}</b>
          </Typography>
          <Typography variant="h6" gutterBottom style={{ fontStyle: 'italic' }}>
            {props.description}
          </Typography>
          <Typography
            variant="h6"
            display="block"
            gutterBottom
            style={{ color: '#8b3f37' }}
          >
            <b>${props.price}</b>
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '10rem',
          }}
        >
          <form>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: '15px',
              }}
            >
              <Typography variant="h6">
                <label>
                  <b>Amount</b>
                </label>
              </Typography>

              <input
                onChange={amountChangeHandler}
                type="number"
                value={amount}
                style={{
                  width: '35px',
                  paddingLeft: '10px',
                  border: '1px solid lightgray',
                  borderRadius: '5px',
                  fontSize: '16px',
                }}
              />
            </div>
            <Button
              onClick={onAddMealHandler}
              variant="contained"
              startIcon={<AddIcon />}
              style={{
                borderRadius: '30px',
                padding: '10px 10px',
                background: '#8b3f37',
                fontSize: '15px',
                width: '150px',
              }}
            >
              Add Item
            </Button>
          </form>
        </div>
      </div>
      <hr
        style={{
          marginBottom: '15px',
          borderTop: '1px solid lightgray',
          borderRight: 'none',
          borderLeft: 'none',
          borderBottom: 'none',
        }}
      />
    </>
  );
};

export default MealItem;
