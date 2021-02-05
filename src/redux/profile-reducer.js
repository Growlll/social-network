import {profileAPI} from "../api/api";

const ADD_POST = 'profilePage/ADD_POST'
const DELETE_POST = 'profilePage/DELETE_POST'
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE'
const SET_STATUS = 'profilePage/SET_STATUS'

const initialState = {
  posts: [
    {id: 1, message: 'Hi, John Doe', countsLikes: 234},
    {id: 2, message: 'I\'m fine', countsLikes: 543},
    {id: 3, message: 'I\'m not bad', countsLikes: 43},
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {
          id: 5,
          message: action.newPost,
          countsLikes: 0
        }]
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.idPost)
      }

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: {...action.profile}
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }

    default:
      return state
  }
}

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost})
export const deletePostActionCreator = (idPost) => ({type: DELETE_POST, idPost})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

// DAL layer
export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.profile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export default profileReducer;