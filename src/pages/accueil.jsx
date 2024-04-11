import React from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image1 from '../assets/images/Image1.png';
import Rawmeat from '../assets/images/rawmeat.png';
import Fullchicken from '../assets/images/fullchicken.png';
import Intrologo from '../assets/images/intrologo.jpg';

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    padding: '40px',
  },
  card: {
    width: '142.9px',
    height: '216.19px',
    borderRadius: '8px',
    padding: '20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '216.19px',
    cursor: 'pointer',
  },
  image: {
    width: '142.9px',
    height: '216.19px',
  },
  sectionheader: {
    textAlign: 'left',
    margin: '20px',
    width: 'Fixed 390px',
    height: '30px',
    top: '166.81px',
    padding: '0px 24px 0px 24px',
    gap: '0px',
    fontSize: '24px',
    top: '166.81px',
    color: '#2196f3',
  },
  buttontext: {
    width: '147px',
    height: '35px',
    borderRadius: '24px 0px 0px 0px',
    padding: '8px',
    // color: '#CF1B26',
  },
  logo: {
    width: '110px', 
    height: '110px', 
    margin: 'auto', 
    display: 'block',
    marginBottom: '10px',
  },
});

export default function CustomCard() {
  const classes = useStyles();

  return (
    <div>
      <img src={Intrologo} alt="" className={classes.logo} />
      <div className={classes.sectionheader}>Que desirez-vous?</div>
      <div className={classes.container}>
        <Card className={classes.card}>
          <div className={classes.content}>
            <img src={Image1} alt="" className={classes.image} />
          </div>
          <div>
            <button className={classes.buttontext}>Viande de Boeuf</button>
          </div>
        </Card>

        <Card className={classes.card}>
          <div className={classes.content}>
            <img src={Rawmeat} alt="" className={classes.image} />
            <button>Viande de Porc</button>
          </div>
        </Card>

        <Card className={classes.card}>
          <div className={classes.content}>
            <img src={Fullchicken} alt="" className={classes.image} />
            <button>Viande de Poulet</button>
          </div>
        </Card>

        <Card className={classes.card}>
          <div className={classes.content}>
            <img src={Image1} alt="" className={classes.image} />
            <button>Viande de Lapin</button>
          </div>
        </Card>
      </div>
    </div>
  );
}
