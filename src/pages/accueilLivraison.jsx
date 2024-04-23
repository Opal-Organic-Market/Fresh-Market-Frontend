import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image1 from '../assets/images/Image1.png';
import Rawmeat from '../assets/images/rawmeat.png';
import Fullchicken from '../assets/images/fullchicken.png';
import Intrologo from '../assets/images/intrologo.jpg';
import JeSimuleUnDevis from "../components/JeSimuleUnDevis";
import { Link } from 'react-router-dom';
import { ArrowBack } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '70%'
    },
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    padding: '25px',
    gap: '10px',
  },
  card: {
    width: '120px',
    height: '180px',
    borderRadius: '8px',
    padding: '10px',
    paddingBottom: '25px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '180px',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  sectionheader: {
    textAlign: 'left',
    margin: '20px',
    width: 'Fixed 390px',
    height: '30px',
    padding: '0px 24px 0px 24px',
    gap: '0px',
    fontSize: '24px',
    top: '166.81px',
    color: '#2196f3',
  },
  buttontext: {
    width: '100%',
    height: '35px',
    padding: '8px 0',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '24px',
  },
  logo: {
    width: '110px', 
    height: '110px', 
    margin: 'auto', 
    display: 'block',
    marginBottom: '10px',
  },
  buttonlabel: {
    fontFamily: 'Droid Sans',
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '20px',
    textAlign: 'center',
    borderRadius: '15px',
    backgroundColor: '#013438', // Deep green color
    color: 'white', // White text color
    border: 'none',
    cursor: 'pointer',
    padding: '8px 0',
  },
  headerlabel: {
    fontFamily: 'Droid Sans',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '20px',
    textAlign: 'left',
    color: '#CF1B26',
},
}))

export default function AccueilTypedeviandeLivraison() {
  const classes = useStyles();

  return (
    <div>
    
      <br></br>
      <br></br>
      <img src={Intrologo} alt="" className={classes.logo} />
      <div className={classes.headerlabel}>Livraison en cours ...</div>
      <div className={classes.sectionheader}>Que desirez-vous?</div>
      <div className={classes.container}>
        <Card className={classes.card}>
          <div className={classes.content}>
            <img src={Image1} alt="" className={classes.image} />
            <button className={classes.buttontext}>Viande de Boeuf</button>
          </div>
        </Card>

        <Card className={classes.card}>
          <div className={classes.content}>
            <img src={Rawmeat} alt="" className={classes.image} />
            <button className={classes.buttontext}>Viande de Porc</button>
          </div>
        </Card>

        <Card className={classes.card}>
          <div className={classes.content}>
            <img src={Fullchicken} alt="" className={classes.image} />
            <Link to="/AccueilParties">
              <button className={classes.buttontext}>Viande de Poulet</button>
            </Link>
          </div>
        </Card>

        <Card className={classes.card}>
          <div className={classes.content}>
            <img src={Image1} alt="" className={classes.image} />
            <button className={classes.buttontext}>Viande de Lapin</button>
          </div>
        </Card>
      </div>
      <br></br>
      <br></br>
      <Link to="/Livraison">
        <JeSimuleUnDevis />
      </Link>
    </div>
  );
}
