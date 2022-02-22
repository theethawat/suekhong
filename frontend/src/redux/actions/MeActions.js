/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import { api } from '../../configs'
import { ME_ERROR, ME_GET, ME_LOGIN, ME_RESET } from '../type'

export const meLogin =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const { data, status } = await api.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        {
          username,
          password,
        },
      )

      if (data && status === 200) {
        dispatch({ type: ME_LOGIN, payload: { isReady: true } })
        console.log('Response Data', data)
        window.localStorage.setItem('TDC_TOKEN', data.authToken)
        window.localStorage.setItem('TDC_USER', data._id)
      }
    } catch (error) {
      console.error('Login Error', error)
      dispatch({ type: ME_ERROR, payload: { error: error?.message } })
      throw new Error(error)
    }
  }
