import { combineReducers } from 'redux'

import MeReducer from './MeReducers'
import ProductReducer from './ProductReducers'

const rootReducers = combineReducers({
  me: MeReducer,
  product: ProductReducer,
})

export default rootReducers
