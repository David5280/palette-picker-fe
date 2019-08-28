import * as actions from './index';

describe('actions', () => {
  it('should have a type of STORE_PALETTE', () => {
    const palette = [543421, 543211, 778866, 555555, 443255];

    const expectedAction = {
      type: 'STORE_PALETTE',
      palette: [543421, 543211, 778866, 555555, 443255]
    };

    const result = actions.storePalette(palette);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of CHANGE_SCHEME', () => {
    const scheme = 'titrade'

    const expectedAction = {
      type: 'CHANGE_SCHEME',
      scheme: 'titrade'
    };

    const result = actions.changeScheme(scheme);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of CHANGE_VARIATION', () => {
    const variation = 'hard'

    const expectedAction = {
      type: 'CHANGE_VARIATION',
      variation: 'hard'
    };

    const result = actions.changeVariation(variation);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of RETRIEVE_PROJECTS', () => {
    const projects = [
      { id: 1, name: 'new-project', updated: 'never', created: 'next year'},
      { id: 2, name: 'newer-project', updated: 'just now', created: 'never'},
      { id: 3, name: 'old-stuff', updated: 'years ago', created: 'early 1600s'},
    ]

    const expectedAction = {
      type: 'RETRIEVE_PROJECTS',
      projects: [
        { id: 1, name: 'new-project', updated: 'never', created: 'next year'},
        { id: 2, name: 'newer-project', updated: 'just now', created: 'never'},
        { id: 3, name: 'old-stuff', updated: 'years ago', created: 'early 1600s'}
      ]
    };

    const result = actions.retrieveProjects(projects);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of RETRIEVE_PROJECTS', () => {
    const loading = false;

    const expectedAction = {
      type: 'LOAD_COMPLETE',
      loading: false
    };

    const result = actions.loadComplete(loading);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of HAS_ERRORED', () => {
    const error = 'Something terrible has happened';

    const expectedAction = {
      type: 'HAS_ERRORED',
      error
    };

    const result = actions.hasErrored(error);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of LOAD_PROJECT_PALLETS', () => {
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
      },
    ];

    const expectedAction = {
      type: 'LOAD_PROJECT_PALETTES',
      palettes
    };

    const result = actions.loadProjectPalettes(palettes);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of ADD_PROJECT', () => {
    const project = {
      name: 'new one for the fans'
    };

    const expectedAction = {
      type: 'ADD_PROJECT',
      project
    };

    const result = actions.addProject(project);

    expect(result).toEqual(expectedAction);
  });
  it('should have a type of DELETE_PROJECT', () => {
    const projectID = {
      id: 4
    };

    const expectedAction = {
      type: 'DELETE_PROJECT',
      projectID
    };

    const result = actions.deleteProject(projectID);

    expect(result).toEqual(expectedAction);
  });
});