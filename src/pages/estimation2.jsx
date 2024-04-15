import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  page: {
    width: 390,
    height: 844,
    position: 'absolute',
    top: 432,
    left: 307,
    background: '#FFFFFF',
  },
  contentfirst: {
    fontFamily: 'Droid Sans',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '20px',
    textAlign: 'left',
  },
  content: {
    fontFamily: 'Droid Sans',
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: '30px',
    textAlign: 'left',
    color: '#045E98',
  }
  
}));

export default function Estimation2() {
  const styles = useStyles();

  return (
    <div>
      <Typography className={styles.contentfirst}>
      J’estime mes coûts.</Typography>
      <Typography className={styles.content}>
      Quelle quantité voulez-vous ?</Typography>
    </div>
  );
}