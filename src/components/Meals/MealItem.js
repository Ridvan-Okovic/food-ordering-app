import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React from 'react';

const MealItem = (props) => {
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
                type="number"
                style={{
                  width: '35px',
                  border: '1px solid lightgray',
                  borderRadius: '5px',
                  fontSize: '16px',
                }}
              />
            </div>
            <Button
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
      <hr style={{ marginBottom: '15px', color: 'lightgray' }} />
    </>
  );
};

export default MealItem;
