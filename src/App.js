import React from 'react';
import Onboarding2 from './pages/onboarding2';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Onboarding1 from './pages/onboarding1';
import Onboarding3 from './pages/onboarding3';
import AccueilTypedeviande from './pages/accueil';
import AccueilTypedeviandeLivraison from './pages/accueilLivraison';
import Livraison from './pages/Livrais';
import Welcome from './pages/welcome';
import Intro from './pages/intro';
import AccueilParties from './pages/Parties';
import AccueilParties2 from './pages/parties2';
import Estimation1 from './pages/estimation1';
import Estimation2 from './pages/estimation2';
import Estimation3 from './pages/estimation3';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/onboarding1" element={<Onboarding1 />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/accueilTypedeviande" element={<AccueilTypedeviande />} />
          <Route path="/accueilTypedeviandeLivraison" element={<AccueilTypedeviandeLivraison />} />
          <Route path="/livraison" element={<Livraison />} />
          <Route path="/accueilParties" element={<AccueilParties/>}/>
          <Route path="/accueilParties" element={<AccueilParties2/>}/>
          <Route path="/estimation1" element={<Estimation1/>}/>
          <Route path="/estimation2" element={<Estimation2/>}/>
          <Route path="/estimation3" element={<Estimation3/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

