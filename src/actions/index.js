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