import Enzyme, { mount } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter, Route } from "react-router-dom";
import Result from "../Result/Result";

Enzyme.configure({ adapter: new Adapter() });

let wrapped: any;

beforeEach(() => {
  wrapped = mount(
    <BrowserRouter>
      <Route path="/result" exact component={Result} />
    </BrowserRouter>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("try to find the elements", () => {
  expect(wrapped.find("p").length).toEqual(0);
  expect(wrapped.find("a").length).toEqual(0);
  expect(wrapped.find("h1").length).toEqual(0);
  expect(wrapped.find("div").length).toEqual(0);
});
