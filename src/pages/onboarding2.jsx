import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Boeuf from "../assets/images/Boeuf.png";

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
      <img src={Boeuf} alt="Boeuf" className={classes.boeuf} />
      <br></br>
      <Typography className={classes.productname}>
        Commandes sur mesure.
      </Typography>
      <br></br>
      <Typography className={classes.productdescription}>
        Aurevoir la calculette ! Donnez-nous le nombre de consommateurs de nos produits et l’appli fera une estimation du coût pour vous.
      </Typography>
    </div>
  );
}
