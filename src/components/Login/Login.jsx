import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControl/FormsControl";
import {maxLength, minLength, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControl/FormsControl.module.css'

const minLength2 = minLength(2)
const minLength8 = minLength(8)
const maxLength16 = maxLength(16)
const maxLength50 = maxLength(50)

const Captcha = (props) => {
  return <div>
    <div>
      <img src={props.meta.error} alt=""/>
    </div>
    <div>
      <Field name={'captcha'} component={Input} validate={[required]}/>
    </div>
  </div>
}

const LoginForm = ({handleSubmit, error, captchaImg}) => {
  console.log(error, handleSubmit)
  return <form onSubmit={handleSubmit}>

    {createField('email', Input, [required, minLength2, maxLength50], 'Login')}
    {createField('password', Input, [required, minLength8, maxLength16], 'Password', {type: 'password'})}
    {createField('isRemember', Input, [], null, {type: 'checkbox'}, 'remember me')}

    { error && <div className={s.wrongData}>{error}</div>}

    {/*{*/}
    {/*  error && <div><Field name='captchaImg' component={Captcha} captcha={captchaImg}/></div>*/}
    {/*}*/}
    <div>
      <button type='submit'>Log in</button>
    </div>
  </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.isRemember)
  }

  if (props.isAuth) {
    return <Redirect to='profile' />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit}/>
  </div>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);