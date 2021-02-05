import * as axios from 'axios'

const REGISTER_PROFILE = 'REGISTER_PROFILE'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

const initialState = {
  login: null,
  password: null,
  isRemember: null
}

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PROFILE:
      return {
        ...state,
        ...action.data
      }

    default:
      return state
  }
}

export const setAuthUserData = (login, password, isRemember) => ({type: REGISTER_PROFILE, data: {login, password, isRemember}})

// DAL layout
export const registerUserData = () => {
  return (dispatch) => {
    instance.post('/auth/login', { login, password, isRemember })
      .then(response => {
        console.log(response)
      })
  }
}

export default registerReducer;