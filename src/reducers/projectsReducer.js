export const projectsReducer = (state=[], action) => {
  switch (action.type) {
    case 'RETRIEVE_PROJECTS':
      return [...state, ...action.projects]
    case 'ADD_PROJECT':
      return [...state, action.project]
    case 'DELETE_PROJECT':
      return state = state.filter(project => project !== action.id)
    case 'LOAD_PROJECT_PALETTES':
      return state.savedPalettes = action.palettes
    default:
      return state
  }
}