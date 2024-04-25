import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Container, Box } from "@material-ui/core";
import pouletthigh from "../assets/images/pouletthigh.png";
import poulet from "../assets/images/Poulet.jpg";
import poulet2 from "../assets/images/poulet2.png";
import poulet3 from "../assets/images/poulet3.png";
import Continuer from "../components/Continuer";
import PartsCard from '../components/PartsCard'; // Import the PartsCard component

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down('md')]: {
      width: "100%"
    },
    [theme.breakpoints.up('lg')]: {
      width: "70%",
      margin: "o auto"
    },
    minheight: "100vh",
    background: "#FFFFFF",
    
  },
  contentfirst: {
    fontFamily: "Droid Sans",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "20px",
    textAlign: "left",
    color: "#013438",
  },
  content: {
    fontFamily: "Droid Sans",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "30px",
    textAlign: "left",
    color: "#045E98",
  },
  pouletthighContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(2), // Adjust the gap between grid items as needed
    justifyContent: "center", // Center the grid horizontally
    alignItems: "center", // Center the grid vertically
    marginTop: theme.spacing(2), // Add margin top to the grid container
  },
  pouletImage: {
    maxWidth: "100%", // Ensure images don't exceed container width
    height: "auto", // Maintain aspect ratio
  },
}));

export default function AccueilParties() {
  const styles = useStyles();

  return (
    <Box className={styles.page} pb={8}>
      <br></br>
      <br></br>
      <br></br> 
      <Typography className={styles.contentfirst}>
        Je désire du Poulet.
      </Typography>
      <br></br>
      
      <Typography className={styles.content}>
        Quelle partie voulez-vous ?
      </Typography>
      <Container className={styles.pouletthighContainer}>
        <PartsCard imageUrl={poulet} productName="Ailes " />
        <PartsCard imageUrl={poulet2} productName="Haut des cuisses " />
        <PartsCard imageUrl={pouletthigh} productName="Pilon" />
        <PartsCard imageUrl={poulet3} productName="Poultrine" />
        <PartsCard imageUrl={poulet2} productName="Haut des cuisses " />
        <PartsCard imageUrl={pouletthigh} productName="Pilon" /> 
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/AccueilParties2">
        <Continuer/>
      </Link>
      <br></br>
      <br></br>
      <br></br>
    </Box>
  );
}