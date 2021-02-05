import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, John Doe', countsLikes: 234},
        {id: 2, message: 'I\'m fine', countsLikes: 543},
        {id: 3, message: 'I\'m not bad', countsLikes: 43},
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogs: [
        {id: 1, name:'Vitaliy'},
        {id: 2, name:'John'},
        {id: 3, name:'Dima'},
        {id: 4, name:'Kolya'},
        {id: 5, name:'Sveta'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'You are really funny!'},
      ],
      newMessage: ''
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._callSubscriber(this.getState())

  }
}

window.store = store

export default store;