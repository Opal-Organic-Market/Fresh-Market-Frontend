import React, { useState } from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import '../index.css'

const useStyles = makeStyles((theme) => ({
  quantitySelector: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 12px',
    gap: '12px',
    width: '134px',
    height: '36px',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
  },
  rule: {
    width: '1px',
    height: '36px',
    background: '#D9D9D9',
  },
  circle: {
    // position: 'absolute',
    left: '4.17%',
    right: '4.17%',
    top: '4.17%',
    bottom: '4.17%',
    // background: 'rgba(0, 0, 0, 0.75)',
    width: '20px',
    height: '20px',
    border: '1px solid black',
    borderRadius: '50%',
    minWidth: '20px',
  },
  plus: {
  fontWeight: 'bold',
},

  minus: {
   fontWeight: 'bold',
  },
number: {
    width: '20px',
    height: '20px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center',
    color: '#252425',
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '& input[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:after': {
      borderBottom: 'none',
    },
  },
}));

function QuantitySelector() {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className={classes.quantitySelector}>
      <Button className={`${classes.circle} ${classes.minus}`} onClick={handleDecrement}>-</Button>
      <div className={classes.rule}></div>
      <TextField 
        className={classes.number} 
        value={quantity} 
        type="number"
        inputProps={{ style: { textAlign: 'center', fontWeight: '700', fontSize: '14px', color: '#252425' }}}
      />
      <div className={classes.rule}></div>
      <Button className={`${classes.circle} ${classes.plus}`} onClick={handleIncrement}>+</Button>
    </div>
  );
}

export default QuantitySelector;