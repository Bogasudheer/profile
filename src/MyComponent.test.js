// MyComponent.test.js
import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './App';
describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<MyComponent />);
  });
});