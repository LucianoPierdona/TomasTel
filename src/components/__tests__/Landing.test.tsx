import Enzyme, { mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Landing from "../Landing/Landing";
import { BrowserRouter, Route } from "react-router-dom";
import CalculationsPage from "../CalculationsPage/CalculationsPage";

Enzyme.configure({ adapter: new Adapter() });

let wrapped: any;

beforeEach(() => {
  wrapped = mount(
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/calculate" component={CalculationsPage} />
    </BrowserRouter>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("Have and h1, a P and a Link", () => {
  expect(wrapped.find("h1").length).toEqual(1);
  expect(wrapped.find("p").length).toEqual(1);
  expect(wrapped.find("a").length).toEqual(1);
});

it("Have the text on title and paragraph", () => {
  const headerText = "Cálculo dos planos TeleMais";
  const paragraphText = "Clique no botão abaixo para ir calcular os planos";

  expect(wrapped.text()).toContain(headerText);
  expect(wrapped.text()).toContain(paragraphText);
});

it("When click on the Link, move the user to CalculationsPage", () => {
  expect(wrapped.find("a").simulate("click", { target: CalculationsPage }));
});
