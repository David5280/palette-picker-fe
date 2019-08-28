import React from 'react';
import ReactDOM from 'react-dom';
import {NewPaletteForm} from './NewPaletteForm' 
import { shallow } from 'enzyme'
import { mockColors, mockProjects } from '../../mockData';

describe('NewPaletteForm Container', () => {
let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <NewPaletteForm 
        colors={mockColors} 
        projects={mockProjects}
      />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})