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
    wrapper = shallow(<ColorPreview 
      color={mockColorObj.color}
      paletteID={mockColorObj.paletteID}
      dbKey={mockColorObj.dbKey}
      hexcode={'#ddbbcc'}
      index={1}
      handleLock={jest.fn()}
      icon={'/newIcon.png'}/>)
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});