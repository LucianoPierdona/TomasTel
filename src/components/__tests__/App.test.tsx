import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "../App/App";
import Header from "../Header/Header";
import Adapter from "enzyme-adapter-react-16";
import Routes from "../../Routes";

Enzyme.configure({ adapter: new Adapter() });

let wrapped: any;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a Header Component", () => {
  expect(wrapped.find(Header).length).toEqual(1);
});

it("shows the Router Component", () => {
  expect(wrapped.find(Routes).length).toEqual(1);
});
