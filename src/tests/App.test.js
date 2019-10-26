import React from "react";
import ReactDOM from "react-dom";
// import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "../components/App";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("App renders through the multi-step form", () => {
  let wrap = mount(<App />);
  expect(wrap).toMatchSnapshot();

  wrap.find("select").simulate("change", {
    target: { value: "lunch" }
  });
  expect(wrap).toMatchSnapshot();
  wrap.find("input").simulate("change", {
    target: { value: 2 }
  });
  expect(wrap).toMatchSnapshot();

  wrap.find("div.nextButton").simulate("click");
  expect(wrap).toMatchSnapshot();

  wrap.find("select").simulate("change", {
    target: { value: "Mc Donalds" }
  });
  expect(wrap).toMatchSnapshot();

  wrap.find("div.nextButton").simulate("click");
  expect(wrap).toMatchSnapshot();

  wrap.find("select").simulate("change", {
    target: { value: "Chicken Burger" }
  });
  expect(wrap).toMatchSnapshot();

  wrap.find("input").simulate("change", {
    target: { value: "3" }
  });
  expect(wrap).toMatchSnapshot();

  wrap.find("div.nextButton").simulate("click");
  expect(wrap).toMatchSnapshot();
});
