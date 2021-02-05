import {getAuth} from '../api/api';
import {stopSubmit} from "redux-form";

const AUTH_PROFILE = 'auth/AUTH_PROFILE'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_PROFILE:
      return {
        ...state,
        ...action.payload
      }

    default:
      return state
  }
}

export const setAuthUserData = (email, id, login, isAuth) => ({type: AUTH_PROFILE, payload: {email, id, login, isAuth}})

// DAL layout
export const getAuthUserData = () => (dispatch) => {
  return getAuth.me().then(response => {
    if (response.data.resultCode === 0) {
      const {email, id, login} = response.data.data
      dispatch(setAuthUserData(email, id, login, true))
    }
  })
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    return getAuth.login(email, password, rememberMe)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUserData())
        } else if (response.data.resultCode === 1) {
          const error = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
          dispatch(stopSubmit('login', {_error: error}))
        } else if (response.data.resultCode === 10) {
          console.log(response.data.resultCode)
          getAuth.captcha()
            .then(response => {
              console.log(response.data.url)
              dispatch(stopSubmit('login', {captchaImg: response.data.url}))
            })
        }
      })
  }
}

export const logout = () => {
  return (dispatch) => {
    getAuth.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer;