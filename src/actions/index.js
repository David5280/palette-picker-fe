export const storePalette = palette => ({
  type: 'STORE_PALETTE',
  palette
});

export const changeScheme = scheme => ({
  type: 'CHANGE_SCHEME',
  scheme
});

export const changeVariation = variation => ({
  type: 'CHANGE_VARIATION',
  variation
});

export const retrieveProjects = projects => ({
  type: 'RETRIEVE_PROJECTS',
  projects
});

export const loadComplete = loading => ({
  type: 'LOAD_COMPLETE',
  loading
});

export const hasErrored = error => ({
  type: 'HAS_ERRORED',
  error
});

export const loadProjectPalettes = palettes => ({
  type: 'LOAD_PROJECT_PALETTES',
  palettes
});

export const addProject = project => ({
  type: 'ADD_PROJECT',
  project
});