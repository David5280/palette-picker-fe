import React from 'react';
import { SingleProject } from './SingleProject';
import { shallow } from 'enzyme';
import { serverCall } from '../../fetchCalls/fetchCalls';

jest.mock('../../fetchCalls/fetchCalls', () => ({
  serverCall: jest.fn().mockImplementation(() => {
    return [{ id: 1, name: 'title1',  }, { id: 2, title: 'title2' }];
  })
}));

describe('SingleProject', () => {
  let wrapper;
  let mockProjectID;
  let instance;
  beforeEach(() => {
    mockProjectID = 3
    wrapper = shallow(<SingleProject id={mockProjectID}/>)
    instance = wrapper.instance()
  })

  it('should do match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('HAPPY: Should set the name on CDM', async () => {
    // jest.spyOn(instance, 'serverCall')
    instance.componentDidMount().then(
      expect(wrapper.state('project_name')).toEqual()
    )
  })

  it('HAPPY: Should call a patch fetch on patchPrject', () => {

  })

});