import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Poulet from "../assets/images/Poulet.jpg";

const useStyles = makeStyles((theme) => ({
  page: {
    width: 390,
    height: 844,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto', // Center the page horizontally
  },
  boeuf: {
    width: '278',
    height: '278',
  },
  productname: {
    width: '342',
    height: '80',
    fontWeight: '700',
    font: 'Droid Sans',
    fontSize: '32px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#013438',
  },
  productdescription: {
    width: '342',
    height: '72',
    font: 'Droid Sans',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    textAlign: 'center',
    color: '#797A7B',
  },
}));

export default function Onboaring2() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <img src={Poulet} alt="Boeuf" className={classes.boeuf} />
      <br></br>
      <Typography className={classes.productname}>
      Grands événements en approche ? 
      </Typography>
      <br></br>
      <Typography className={classes.productdescription}>
      Fini les tracas de dernière minute ! Passez vos commandes à l’avance pour des mariages, événements d’entreprises entre autres. 
      </Typography>
    </div>
  );
}
