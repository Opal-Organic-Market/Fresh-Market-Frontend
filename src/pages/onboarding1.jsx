import React from "react";
import { Box } from "@mui/material";
import Poulet from "../assets/images/Poulet.jpg";
import Pouletillustration from "../assets/images/pouletIllustration.jpg";

const Onboarding1 = ({}) => {
  return (
    <div>
      <Box
        sx={{
          width: 390,
          height: 845,
          padding: "48px 24px 56px 24px",
          gap: 56,
          border: "2px solid blue",
          alignItems: "center",
          backgroundImage: "Poulet.jpg",
        }}
      >
        <div
          sx={{
            width: 342,
            height: 262,
            justify: "space-between",
          }}
        >
          <img src={Pouletillustration} alt="" />
          <img src={Poulet} alt="chicken"/>
          <h3>Grands evenements en approach?</h3>
          <p>
            Fini les tracas de derniere minute ! Passez vos commandes a l'avance
            pour des mariages, evenements d'entreprises entre autres.
          </p>
        </div>
      </Box>
    </div>
  );
};

export default Onboarding1;
