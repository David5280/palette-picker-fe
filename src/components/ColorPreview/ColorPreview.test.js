import React from 'react';
import ColorPreview from './ColorPreview';
import { shallow } from 'enzyme';

describe('ColorPreview', () => {
  let mockColorObj;
  let wrapper;
  beforeEach(() => {
    mockColorObj = {
      color: '#FFFEEE',
      paletteID: 4,
      dbKey: 'AYEE',
      }
    wrapper = shallow(
      <ColorPreview 
        color={mockColorObj.color}
        paletteID={mockColorObj.paletteID}
        dbKey={mockColorObj.dbKey}
        hexcode={'#ddbbcc'}
        index={1}
        handleLock={jest.fn()}
        patchProject={jest.fn()}
        icon={'/newIcon.png'}
      />
    )
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should change state when randomColor fires', () => {
    expect(wrapper.state('color')).toEqual('')    
    wrapper.instance().randomColor()
    expect(wrapper.state('edited')).toEqual(true)
    expect(wrapper.state('color')).not.toEqual('')

  });
  it('should change state.edited from true to false when patchColor fires', () => {
    wrapper.instance().randomColor()
    expect(wrapper.state('edited')).toEqual(true)
    wrapper.instance().patchColor()
    expect(wrapper.state('edited')).toEqual(false)
  });
  it('should fire randomColor() when randomize-icon is clicked', () => {
    wrapper.instance().randomColor = jest.fn();
    wrapper.find('.randomize-icon').simulate('click');
    expect(wrapper.instance().randomColor).toHaveBeenCalled();
  });
  it('should fire patchColor() when save-icon is clicked', () => {
    wrapper.instance().patchColor = jest.fn();
    wrapper.find('.randomize-icon').simulate('click');
    wrapper.find('.save-icon').simulate('click');
    expect(wrapper.instance().patchColor).toHaveBeenCalled();
  });
});