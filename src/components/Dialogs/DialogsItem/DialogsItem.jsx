import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div className={s.dialogsItems}>
      <NavLink to={'/dialogs/' + props.id} className={s.dialog}>
        {props.name}
      </NavLink>
    </div>
  )
}

export default DialogsItem;