import React from 'react';
// import Intro from './pages/intro';
// import Onboarding1 from './pages/onboarding1';
// import Onboarding2 from './pages/onboarding2';
// import Onboarding3 from './pages/onboarding3';
// import Welcome from './pages/welcome';
// import CustomCard from './pages/accueil';

import CustomButton from './components/Allons';
import Suivant from './components/Suivant';
import Continuer from './components/Continuer';
import GetStarted from './components/GetStarted';
import Payer from './components/Payer';
import Modifier from './components/Modifier';

export default function App() {
  return (
    <>
      {/* < Intro /> */}
      {/* < Onboarding1 /> */}
      {/* < Onboarding2 /> */}
      {/* < Onboarding4 /> */} 
      {/* <Onboarding3 /> */}
      {/* < Welcome /> */}
      <CustomButton/>
      <GetStarted/>
      <Continuer/>
      <Suivant/>
      <Payer/>
      <Modifier/>
      {/* < CustomCard /> */}
    </>
  ); 
}

