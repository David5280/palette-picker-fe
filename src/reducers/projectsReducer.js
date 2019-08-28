export const projectsReducer = (state=[], action) => {
  switch (action.type) {
    case 'RETRIEVE_PROJECTS':
      return [...state, ...action.projects]
    case 'ADD_PROJECT':
      return [...state, action.project]
    case 'DELETE_PROJECT':
      const newState = state.filter(project => project.id !== action.projectID)
      return newState
    case 'LOAD_PROJECT_PALETTES':
      return state.savedPalettes = action.palettes
    default:
      return state
  }
}