import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FlashOnIcon from '@material-ui/icons/FlashOn';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
    width: '100%', // make width responsive
    height: 94,
    background: '#CF1B26',
    borderRadius: '10px 10px 0 0',
    [theme.breakpoints.up('sm')]: {
      width: 342, // fixed width on larger screens
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    top: 9,
    left: 21,
    gap: 0,
    borderRadius: 4,
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
  enRouteContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '4px',
    width: '100%',
    height: '16px',
    [theme.breakpoints.up('sm')]: {
      width: '214px',
    },
  },
  enRouteText: {
    width: '100%',
    height: '15px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '15px',
    textAlign: 'left',
    color: '#9CDD51',
    [theme.breakpoints.up('sm')]: {
      width: '49px',
    },
  },
  boltIcon: {
    width: '16px',
    height: '16px',
    padding: '1px 3px 1px 3px',
    color: '#9CDD51',
  },
}));

const Enroute = ({ imageUrl, productName, price }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.container}>
      <img src={imageUrl} alt={productName} className={classes.image} style={{width: isSmallScreen ? 50 : 70, height: isSmallScreen ? 50 : 70}}/>
      <div className={classes.productInfo}>
        <span className={classes.productName}>{productName}</span>
        <span className={classes.currentPrice}>{price}</span>
        <div className={classes.enRouteContainer}>
          <span className={classes.enRouteText}>En route</span>
          <FlashOnIcon className={classes.boltIcon} />
        </div>
      </div>
    </div>
  );
};

export default Enroute;