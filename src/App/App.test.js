import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'

describe('Project Container', () => {
  
  it('renders without crashing', () => {
    let wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should do something', () => {

  })
})

