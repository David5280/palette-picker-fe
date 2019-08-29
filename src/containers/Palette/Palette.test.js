import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import { 
  Palette, 
  mapStateToProps, 
  mapDispatchToProps
} from './Palette';
import { 
  mockColors, 
  mockProjects 
} from '../../mockData';

describe('Palette Container', () => {

  let wrapper;

  beforeEach(()=> {
    wrapper = shallow(
      <Palette 
        scheme={'tetrade'}
        variation={"default"}
        colors={mockColors}
        projects={mockProjects}
        storePalette={jest.fn()}
        changeScheme={jest.fn()}
        changeVariation={jest.fn()}
      />
    )
  })

  it('HAPPY: Should match the snap shot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})