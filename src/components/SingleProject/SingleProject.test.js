import React from 'react';
import { SingleProject } from './SingleProject';
import { shallow } from 'enzyme';

jest.mock('../../fetchCalls/fetchCalls', () => ({
  serverCall: jest.fn().mockImplementation(() => {
    return [{ id: 1, name: 'title1',  }, { id: 2, title: 'title2' }];
  })
}));

describe('SingleProject', () => {
  let wrapper;
  let mockProjectID;
  beforeEach(() => {
    mockProjectID = 3
    wrapper = shallow(<SingleProject id={mockProjectID}/>)
    
  })
  it('should do match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});