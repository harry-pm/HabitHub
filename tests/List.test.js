import React from 'react';
import ReactDOM from 'react-dom';
import List from '../src/components/List';
import { shallow } from 'enzyme';

describe('List', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<List />, div);
      ReactDOM.unmountComponentAtNode(div);
   });

  // Checks if a list of habits is rendered in the 
  it("Renders a list of habits", () => {
    const wrapper = shallow(<List />);
    const dummyData = [{
      name: "washing",
      streak: 3,
      completed: [true],
      lastCompleted: "19 / 01 / 2020"
    },
    {
      name: "pushups",
      streak: 100,
      completed: [true, true, false],
      lastCompleted: "19 / 01 / 2020"
    }];
    wrapper.setProps({ habits: dummyData });
    expect(wrapper.find(".list")).to.not.have.lengthOf(0);
  });
})
