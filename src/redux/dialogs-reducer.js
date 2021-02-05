const ADD_MESSAGE = 'dialogsPage/ADD-MESSAGE'

const initialState = {
  dialogs: [
    {id: 1, name: 'Vitaliy'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Dima'},
    {id: 4, name: 'Kolya'},
    {id: 5, name: 'Sveta'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'You are really funny!'},
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: 4,
          message: action.newMessageBody
        }]
      }
    default:
      return state
  }
}

export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogsReducer;