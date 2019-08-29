import React from 'react';
import ReactDOM from 'react-dom';
import { NewPaletteForm, savePalette } from './NewPaletteForm' 
import { shallow } from 'enzyme'
import { mockColors, mockProjects } from '../../mockData';

jest.mock('../../fetchCalls/fetchCalls', () => ({
  serverCall: jest.fn().mockImplementation(() => {
    return 'Called';
  })
}));

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
  });
  it('should change state when handleChange is called', () => {
    const e = {
      target: {
        name: 'paletteName',
        value: 'NEW PALETTE'
      }
    }
    expect(wrapper.state('paletteName')).toEqual('')
    wrapper.find('.palette-name-input').simulate('change', e)
    expect(wrapper.state('paletteName')).toEqual('NEW PALETTE')

  });
  it('should call serverCall when savePalette fires', () => {
    const e = { 
      preventDefault: jest.fn(),
      target: {
        name: 'paletteName',
        value: 'NEW PALETTE'
      }
    };
    jest.spyOn(savePalette, 'ServerCall')
    wrapper.find('.palette-name-input').simulate('change', e)
    wrapper.instance().savePalette(e);
    expect(wrapper.instance().savePalette).toHaveBeenCalled();
  });
  // it('should map state to props', () => {
  //   const state = {
  //     colors: mockColors,
  //     projects: mockProjects
  //   };
  //   const mappedProps = mapStateToProps(state);
  //   expect(mappedProps).toEqual(state);
  // });
});