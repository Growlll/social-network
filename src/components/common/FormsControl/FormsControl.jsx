import React from "react";
import s from './FormsControl.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
  const hasError = touched && error

  return (
    <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
      <div>
        {children}
      </div>

      {hasError && <span>{error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}


export const Input = (props) => {
  return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}

export const createField = (name, component, validators, placeholder, props = {}, text = '') => {
  return (
    <div>
      <Field name={name}
             component={component}
             validate={validators}
             placeholder={placeholder}
             {...props}/> {text}
    </div>
  )
}
