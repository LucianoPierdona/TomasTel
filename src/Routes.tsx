import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CalculationsPage from "./components/CalculationsPage/CalculationsPage";
import Landing from "./components/Landing/Landing";
import Result from "./components/Result/Result";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/calculate" component={CalculationsPage} />
      <Route path="/result" component={Result} />
    </BrowserRouter>
  );
}
