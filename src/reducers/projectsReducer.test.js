import { projectsReducer } from './projectsReducer';

describe('projectsReducer', () => {
  it('should return an initial state', () => {
    const expected = [];
    const result = projectsReducer(undefined, []);
    expect(result).toEqual(expected);
  });
  it('should return projects when RETRIEVE_PROJECTS fires', () => {
    const state = [];
    const projects = [
      { id: 1, name: 'new-project', updated: 'never', created: 'next year'},
      { id: 2, name: 'newer-project', updated: 'just now', created: 'never'},
      { id: 3, name: 'old-stuff', updated: 'years ago', created: 'early 1600s'}
    ]
    const action = {
      type: 'RETRIEVE_PROJECTS',
      projects
    };
    const expected = [
      { id: 1, name: 'new-project', updated: 'never', created: 'next year'},
      { id: 2, name: 'newer-project', updated: 'just now', created: 'never'},
      { id: 3, name: 'old-stuff', updated: 'years ago', created: 'early 1600s'}
    ]
    const result = projectsReducer(state, action);
    expect(result).toEqual(expected);
  });
  it('should delete the proper project when DELETE_PROJECT fires', () => {
    const state = [
      { id: 1, name: 'new-project', updated: 'never', created: 'next year'},
      { id: 2, name: 'newer-project', updated: 'just now', created: 'never'},
      { id: 3, name: 'old-stuff', updated: 'years ago', created: 'early 1600s'}
  ];
    const projectID = 2;
    const action = {
      type: 'DELETE_PROJECT',
      projectID
    }
    const expected = [
      { id: 1, name: 'new-project', updated: 'never', created: 'next year'},
      { id: 3, name: 'old-stuff', updated: 'years ago', created: 'early 1600s'}
  ];
    const result = projectsReducer(state, action);
    expect(result).toEqual(expected);
  });
  it('should retrieve project palettes when LOAD_PROJECT_PALETTES fires', () => {
    const state = []
    const palettes = [
      {
        id: 1, 
        name: 'dive bar', 
        color_1: '#GJ$@OD', 
        color_2: '#TT$@OD', 
        color_3: '#GJ$000', 
        color_4: '#GJYYOD', 
        color_5: '#AAAAAA'
      },
      {
        id: 2, 
        name: 'disney sandwich shop', 
        color_1: '#AAAAAA', 
        color_2: '#BBBBBB', 
        color_3: '#CCCCCC', 
        color_4: '#DDDDDD', 
        color_5: '#EEEEEE'
      }
    ];
    const action = {
      type: 'LOAD_PROJECT_PALETTES',
      palettes
    }
    const expected = [
      {
        id: 1, 
        name: 'dive bar', 
        color_1: '#GJ$@OD', 
        color_2: '#TT$@OD', 
        color_3: '#GJ$000', 
        color_4: '#GJYYOD', 
        color_5: '#AAAAAA'
      },
      {
        id: 2, 
        name: 'disney sandwich shop', 
        color_1: '#AAAAAA', 
        color_2: '#BBBBBB', 
        color_3: '#CCCCCC', 
        color_4: '#DDDDDD', 
        color_5: '#EEEEEE'
      }
    ];
    const result = projectsReducer(state, action)
    expect(result).toEqual(expected)
  });
});;