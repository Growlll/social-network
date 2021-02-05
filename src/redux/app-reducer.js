import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state
  }
}

export const initializeSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
  return (dispatch) => {
    const userData = dispatch(getAuthUserData())
    Promise.all([userData])
      .then(() => {
        dispatch(initializeSuccess())
      })
  }
}


export default appReducer;