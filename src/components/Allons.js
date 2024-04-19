import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 16px',
    gap: '8px',
    width: '342px',
    height: '48px',
    background: '#013438',
    borderRadius: '32px',
    '&:hover': {
      background: '#013438',
      animationTimingFunction: 'ease-in',
      animationDuration: '600ms',
    },
  },
  label: {
    width: '62px',
    height: '20px',
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '125%',
    textAlign: 'center',
    color: '#FFFFFF',
    textTransform: 'uppercase', // This will make the text capitalized
    paddingBottom: '2px', // This will prevent the 'y' from dropping
  },
});

export default function CustomButton() {
  const classes = useStyles();

  const handleClick = () => {
    // Navigate to "Onboarding 1"
    console.log('Navigating to Onboarding 1');
  };

  return (
    <Button className={classes.root} onClick={handleClick}>
      <span className={classes.label}>Allons-y</span>
    </Button>
  );
}
