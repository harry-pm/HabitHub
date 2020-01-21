import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/containers/App';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('App', () => {

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('checks that login verification function works', () => {
    const wrapper = shallow(<App />)
    const instance = wrapper.instance();
    wrapper.setState({users: [{username: 'juicey', password: 'yusey'},{username: "jtrigger", password: "glock"}]});
    // jest.spyOn(instance, "verifyUser");
    instance.verifyUser('juicey', 'yusey');
    expect(wrapper.state().loggedIn).equal(true)
  })
})

