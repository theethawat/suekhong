import { combineReducers } from 'redux'

import MeReducer from './MeReducers'

const rootReducers = combineReducers({
  me: MeReducer,
})

export default rootReducers
