import React from 'react';
import ReactDOM from 'react-dom';
import Color from './Color';
import { shallow } from 'enzyme';

describe('Color Container', () => {
  let mockColorObj;
  let wrapper;
  beforeEach(() => {
    mockColorObj = {
      color: '#FFFEEE',
      paletteID: 4,
      dbKey: 'AYEE',
    }
    wrapper = shallow(<Color 
      color={mockColorObj.color}
      paletteID={mockColorObj.paletteID}
      dbKey={mockColorObj.dbKey}
      patchProject={jest.fn()}
      hexcode={'#ddbbcc'}
      index={1}
      handleLock={jest.fn()}
      icon={'/newIcon.png'}/>)
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  it('should call handleLock when the button is clicked', () => {
    wrapper.find('.locked-icon').simulate('click');
    expect(wrapper.instance().handleLock()).toHaveBeenCalled();
  });
});