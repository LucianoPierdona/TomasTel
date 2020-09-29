import Enzyme, { mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter, Route } from "react-router-dom";
import Result from "../Result/Result";

Enzyme.configure({ adapter: new Adapter() });

let wrapped: any;
let resultData = {
  originDDD: "011",
  destinyDDD: "016",
  minutes: "60",
  planType: "FaleMais 30",
  normalPrice: "114",
  fixedPrice: "62.7",
};

beforeEach(() => {
  wrapped = mount(
    <BrowserRouter>
      <Route path="/result" exact component={Result} history={resultData} />
    </BrowserRouter>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has 3 resultBlock and 6 cardBlock", () => {
  expect(wrapped.find("p").length).toEqual(9);
  expect(wrapped.find("h1").length).toEqual(9);
  expect(wrapped.find("div").length).toEqual(9);
});
