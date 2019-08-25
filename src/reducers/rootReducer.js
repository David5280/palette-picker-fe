import { combineReducers } from 'redux'
import { paletteReducer } from './paletteReducer'
import { projectsReducer } from './projectsReducer'
import { isLoadingReducer } from './isLoadingReducer'
import { errorReducer } from './errorReducer'

export const rootReducer = combineReducers({
  palettes: paletteReducer,
  projects:projectsReducer,
  isLoading: isLoadingReducer,
  hasErrored: errorReducer
})