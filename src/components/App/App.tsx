import React from "react";

import Routes from "../../Routes";
import Header from "../Header/Header";

import { ContentContainer, LayoutContainer } from "./style";

// Page Layout
function App() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Routes />
      </ContentContainer>
    </LayoutContainer>
  );
}

export default App;
