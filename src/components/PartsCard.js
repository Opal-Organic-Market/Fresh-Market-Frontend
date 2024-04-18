import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px',
    gap: '8px',
    position: 'absolute',
    width: '166.9px',
    height: '307.19px',
    left: '199.1px',
    top: '0px',
    border: '1px solid #F6F6F6',
    borderRadius: '10px',
  },
  expandIcon: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '24px',
    height: '24px',
    borderRadius: '100px',
    background: '#9CDD51',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  default: {
    background: '#CDDFEB',
    color: '#045E98',
  },
  added: {
    background: '#9CDD51',
    color: '#FFFFFF',
  },
  button: {
    width: 134,
    height: 35,
    borderRadius: 24,
    padding: '14px 24px',
    display: 'flex',
    flexDirection: 'column', // Ensure this is set to 'column'
    justifyContent: 'space-between', // Add this line
    alignItems: 'center',
    gap: 12,
    fontFamily: 'Droid Sans',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: '20px',
    textAlign: 'center',
    marginTop: 'auto', // Add this line
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // flexGrow: 1, // Add this line
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

const PartsCard = ({ imageUrl, productName }) => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);
  const [state, setState] = useState('default');

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = () => {
    if (state === 'default') {
      setState('added');
      setTimeout(() => setState('added'), 1);
    } else {
      setState('default');
    }
  };

  let buttonClass;
  let endIcon;

  switch (state) {
    case 'added':
      buttonClass = classes.added;
      endIcon = <CheckIcon />;
      break;
    default:
      buttonClass = classes.default;
  }
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <div className={classes.container}>
      <IconButton className={classes.expandIcon} onClick={handleExpandClick}>
        <ExpandMoreIcon style={{ transform: isExpanded ? "rotate(180deg)" : "none" }} />
      </IconButton>
      <div className={classes.imageContainer}>
        {imageUrl && <img src={imageUrl} alt={productName} className={classes.image}/>}
      </div>
      <animated.div style={props}>
        <Button onClick={handleClick} className={`${classes.button} ${buttonClass}`} endIcon={endIcon}>
          {productName}
        </Button>
      </animated.div>
    </div>
  );
};

export default PartsCard;
