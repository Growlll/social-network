import React from 'react';
import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

  if (!props.isAuth) return <Redirect to={'/login'}/>

  const dialogsElements = props.dialogsPage.dialogs
    .map(d => <DialogsItem id={d.id} name={d.name}/>)

  const messagesElements = props.dialogsPage.messages
    .map(m => <Message message={m.message}/>)

  const addNewMessage = (values) => {
    props.addMessage(values.dialogMessage)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div>
        <div className={s.messagesBlock}>
          {messagesElements}
        </div>

        <AddMessageFormRedux onSubmit={addNewMessage}/>

      </div>
    </div>
  )
}


export default Dialogs