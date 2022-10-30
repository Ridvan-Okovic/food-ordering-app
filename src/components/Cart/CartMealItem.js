import { Button, ButtonGroup, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react';

const CartMealItem = (props) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
        }}
      >
        <div style={{}}>
          <Typography variant="h5" gutterBottom>
            {props.name}
          </Typography>

          <Typography
            variant="h6"
            display="block"
            gutterBottom
            style={{ color: '#8b3f37' }}
          >
            ${props.price}
          </Typography>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingRight: '10px',
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{
              border: '1px solid lightgray',
              padding: '2px 15px',
              borderRadius: '10px',
            }}
          >
            {props.amount}
          </Typography>

          <div>
            <ButtonGroup>
              <Button
                variant="contained"
                style={{
                  borderRadius: '10px 0px 0px 10px',
                  padding: '5px',
                  background: '#8b3f37',
                  fontSize: '10px',
                  width: '50px',
                }}
              >
                <AddIcon />
              </Button>
              <Button
                variant="contained"
                style={{
                  borderRadius: '0px 10px 10px 0px',
                  padding: '3px',
                  fontSize: '10px',
                  width: '50px',
                  background: '#fff',
                  border: ' 1px solid #8b3f37',
                  color: '#8b3f37',
                }}
              >
                <RemoveIcon />
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default CartMealItem;
