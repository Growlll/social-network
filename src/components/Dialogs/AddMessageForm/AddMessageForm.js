import s from "../Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLength, required} from "../../../utils/validators/validators";

const maxLength100 = maxLength(100)

const DialogsMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.sendBlock}>
        <Field component={Textarea}
               validate={[required, maxLength100]}
               name={'dialogMessage'}
               className={s.sendText}/>
        <button>Send</button>
      </div>
    </form>
  )
}

export const AddMessageFormRedux = reduxForm({form: 'dialogsMessage'})(DialogsMessage)
