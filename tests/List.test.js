import React from 'react';
import ReactDOM from 'react-dom';
import List from '../src/components/List';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Habit from '../src/components/Habit'
          
const dummyData = [
    {
      "completed": [
        true
      ],
    "_id": "5e26e0397bd56f3754ed6d19",
    "name": "washing",
    "streak": 3,
    "lastCompleted": "2020-01-19T00:00:00.000Z"
  },
  {
    "completed": [
      true,
      true,
      false
    ],
    "_id": "5e26e0397bd56f3754ed6d1a",
    "name": "pushups",
    "streak": 100,
    "lastCompleted": "2020-01-19T00:00:00.000Z"
  }];

const toggleCompleted = jest.fn();
describe('List', () => {    
  // Checks if a list of habits is rendered in the 
  it("Renders a list of  2 habits", () => {
    const wrapper = shallow(<List 
      habits={dummyData}
      toggleCompleted={toggleCompleted}/>);
      expect(wrapper.find('div').find(Habit)).to.have.lengthOf(2);
  });
})
