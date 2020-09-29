import Enzyme, { mount } from "enzyme";
import React from "react";
import Header from "../Header/Header";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

let wrapped: any;

beforeEach(() => {
  wrapped = mount(<Header />);
});

afterEach(() => {
  wrapped.unmount();
});

it("Have and h1 and a span", () => {
  expect(wrapped.find("h1").length).toEqual(1);
  expect(wrapped.find("span").length).toEqual(1);
});

it("Find Tel and zir", () => {
  expect(wrapped.text()).toContain("Telzir");
});
