import React from "react";
import { Link } from "react-router-dom";

import { LandingContent } from "./style";

// Initial Page
const Landing = () => {
  return (
    <LandingContent className="animate__animated animate__fadeIn">
      <h1>Cálculo dos planos TeleMais</h1>
      <p>Clique no botão abaixo para ir calcular os planos</p>
      <Link to="/calculate">Ir Para a Página</Link>
    </LandingContent>
  );
};

export default Landing;
