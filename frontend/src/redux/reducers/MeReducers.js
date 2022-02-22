import { ME_ERROR, ME_GET, ME_LOGIN } from '../type'

const initialState = { isReady: false }

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line default-param-last
export default function MeReducer(state = initialState, action) {
  switch (action.type) {
    case ME_GET:
      return { ...action.payload, isReady: true }
    case ME_LOGIN:
      return { ...action.payload, isReady: false }
    case ME_ERROR:
      return { ...action.payload, isReady: false }
    default:
      return state
  }
}
