import React from 'react';
import ReactDOM from 'react-dom';
import { NewPaletteForm, mapStateToProps } from './NewPaletteForm' 
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

  it('should map state to props', () => {
    const mockState = {
      colors: mockColors,
      projects: mockProjects
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState);
    
  })

})