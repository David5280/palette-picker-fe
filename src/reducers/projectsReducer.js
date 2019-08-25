export const projectsReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project]
    case 'DELETE_PROJECT':
      return state = state.filter(project => project !== action.id)
    default:
      return state
  }
}