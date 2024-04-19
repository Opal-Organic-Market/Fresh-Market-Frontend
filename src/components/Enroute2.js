import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import '../index.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: '100%', // make width responsive
    height: 94,
    background: '#CDDFEB',
    borderRadius: '10px 10px 10px 10px',
    [theme.breakpoints.up('sm')]: {
      width: 342, // fixed width on larger screens
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    top: '11px',
    left: '21px',
    gap: '0px',
    borderRadius: '4px ',
    [theme.breakpoints.up('sm')]: {
      width: 70,
      height: 70,
    },
  },
  productInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '12px 16px 12px 0px',
    gap: 8,
    width: '100%',
    height: 94,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      width: 230,
    },
  },
  productName: {
    width: '100%',
    height: 20,
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '125%',
    color: '#FFFFFF',
    [theme.breakpoints.up('sm')]: {
      width: 214,
    },
  },
  currentPrice: {
    width: '100%',
    height: 18,
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '125%',
    color: '#FFFFFF',
    opacity: 0.9,
    [theme.breakpoints.up('sm')]: {
      width: 214,
    },
  },
  arrivalInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    gap: 4,
    width: '100%',
    height: 16,
    [theme.breakpoints.up('sm')]: {
      width: 214,
    },
  },
  currentPrice2: {
    width: '100%',
    height: 15,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '125%',
    color: '#9CDD51',
    opacity: 0.9,
    [theme.breakpoints.up('sm')]: {
      width: 49,
    },
  },
  checkCircle: {
    width: 16,
    height: 16,
    color: '#51B960',
  },
}));

const Enroute2 = ({ imageUrl, productName, price }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.container}>
      <img src={imageUrl} alt={productName} className={classes.image} style={{width: isSmallScreen ? 50 : 70, height: isSmallScreen ? 50 : 70}}/>
      <div className={classes.productInfo}>
        <span className={classes.productName}>{productName}</span>
        <span className={classes.currentPrice}>{price}</span>
        <div className={classes.arrivalInfo}>
          <span className={classes.currentPrice2}>{price}</span>
          <CheckCircleIcon className={classes.checkCircle} />
        </div>
      </div>
    </div>
  );
};

export default Enroute2;
