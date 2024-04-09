import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Commandesillustration from "../assets/images/commandesIllustration.png";

const useStyles = makeStyles((theme) => ({
  page: {
    width: 390,
    height: 844,
    position: 'absolute',
    top: 432,
    left: 307,
    background: '#FFFFFF',
  },
  textbox: {
    width: 342,
    height: 64,
    position: 'absolute',
    top: 358,
    left: 24,
    font: 'Droid Sans',
    fontSize: '20px',
    fontWeight: '400',
    lineHeight: '25px',
    textAlign: 'center',
    color: '#013438',
  },
  logo: {
    width: 260,
    height: 260,
    position: 'absolute',
    top: 87,
    left: 65,
  },
  text: {
    width: 342,
    height: 18,
    position: 'absolute',
    bottom: 50, // adjust as needed
    left: 24,
    font: 'Droid Sans',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '17.5px',
    textAlign: 'center',
    color: '#013438',
  },
}));

export default function Onboaring2() {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <img src={Commandesillustration} alt="logo" className={classes.logo} />
      <Typography className={classes.textbox}>
        Digitalisons le terroir au service de toutes les tables
      </Typography>
      <Typography className={classes.text}>
        Avez-vous déjà un compte ?
      </Typography>
    </div>
  );
}