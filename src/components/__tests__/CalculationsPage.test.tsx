import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CalculationsPage from "../CalculationsPage/CalculationsPage";
import { BrowserRouter } from "react-router-dom";
import { data } from "../../data";
import Result from "../Result/Result";

Enzyme.configure({ adapter: new Adapter() });

let wrapped: any;

beforeEach(() => {
  wrapped = mount(
    <BrowserRouter>
      <CalculationsPage />
    </BrowserRouter>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("Has 3 h1 and 3 labels and a submit button", () => {
  expect(wrapped.find("h1").length).toEqual(3);
  expect(wrapped.find("label").length).toEqual(3);
  expect(wrapped.find("button").length).toEqual(1);
});

it("Has 3 selects and 1 input", () => {
  expect(wrapped.find("select").length).toEqual(3);
  expect(wrapped.find("input").length).toEqual(1);
});

it("Get all DDD's and Plans from the data", () => {
  expect(data.ddd.map((ddd) => ddd).length).toEqual(5);
  expect(data.plans.map((plan) => plan).length).toEqual(4);
});

describe("firstOption", () => {
  beforeEach(() => {
    wrapped.find("#originDDD").simulate("change", {
      target: { value: parseInt("016") },
    });

    wrapped.update();
  });

  it("has a option and user can change", () => {
    expect(wrapped.find("#a016").prop("value")).toBeTruthy();
  });
});

describe("secondOption", () => {
  beforeEach(() => {
    wrapped.find("#destinyDDD").simulate("change", {
      target: { value: parseInt("016") },
    });

    wrapped.update();
  });

  it("has a option and user can change", () => {
    expect(wrapped.find("#b016").prop("value")).toBeTruthy();
  });
});

describe("thirdOption", () => {
  beforeEach(() => {
    wrapped.find("#planSelect").simulate("change", {
      target: { value: "FaleMais30" },
    });

    wrapped.update();
  });

  it("has a option and user can change", () => {
    expect(wrapped.find("#FaleMais30").prop("value")).toBeTruthy();
  });
});

describe("input", () => {
  beforeEach(() => {
    wrapped.find("input").simulate("change", {
      target: { value: 99 },
    });

    wrapped.update();
  });

  it("has a input and user can type in", () => {
    expect(wrapped.find("input").prop("value")).toEqual(99);
  });
});

it("When click on the Link, move the user to the Result", () => {
  expect(wrapped.find("button").simulate("click", { target: Result }));
});
