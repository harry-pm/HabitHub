import React from 'react';
import ReactDOM from 'react-dom';
import Habits from '../src/containers/Habits';
import { shallow } from 'enzyme';

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
  }]   


describe('Habits', () => {

  it('sets state to users habits', () => {
      
      const wrapper = shallow(<Habits />)
      
  });


})
