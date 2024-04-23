import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { makeStyles } from "@material-ui/core";
import Momologo from "../assets/images/momologo.png";
import { Typography, Box } from "@material-ui/core";
import Modifier from "../components/Modifier";

const useStyles = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
      margin: "0 auto",
    },
    height: "844px",
    textAlign: "center",
    justifyContent: "center",
    margin: "auto",
    padding: "",
  },
  paymentHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1), // Adjust margin as needed
  },
  paymentTitle: {
    fontFamily: "Droid Sans",
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "25px",
    textAlign: "left",
    color: "#045E98",
    marginLeft: theme.spacing(10), // Add margin between ArrowBack and text
  },
  // Additional style for Modifier and Method de paiement
  methodAndModifierContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2), // Adjust margin as needed
  },
  momologo: {
    width: "267px",
    height: "189px",
    borderRadius: "18px 0px 0px 0px",

  }
}));

export default function Checkout() {
  const stlyes = useStyles();
  return (
    <div className={stlyes.page}>
      <Box className={stlyes.paymentHeader}>
        <br></br>
        <br></br>
        <br></br>
        <ArrowBack />
        <Typography className={stlyes.paymentTitle}>Paiement</Typography>
      </Box>
      {/* Container for Modifier and Method de paiement */}
      <Box className={stlyes.methodAndModifierContainer}>
        <Typography className={stlyes.payment}>Méthode de paiement</Typography>
        <Modifier />
      </Box>
      <br></br>
      <img className={stlyes.momologo} src={Momologo} alt="" />
      <Typography className={stlyes.address}>Adresse</Typography>
      <Typography>Hotel Bano Palace</Typography>
      <Typography>BP 353, Tsinga Yaoundé, Cameroun</Typography>
      <Typography>Code Promo</Typography>
      <Typography>Livraison</Typography>
      <Typography>Total</Typography>
    </div>
  );
}
