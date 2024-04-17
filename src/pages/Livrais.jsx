import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import SearchBar from "../components/SearchBar";



const useStyles = makeStyles({
  topography: {
   fontFamily: 'Droid Sans',
   fontSize: '24px',
   fontWeight: '700',
   lineHeight: '30px',
   textAlign: 'left',

   }
})



export default function Livraison() {
const styles = useStyles

  return (

    <>
    <h3 className={styles.topography}>Commandes</h3>
    <SearchBar/>
    <Typography>Les 3 derneirs mois</Typography>
  
    </>
  
  )
}
