import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from '../../assets/imgs/user.jpg'

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png" alt=''/>
      </div>

      <div>
        {
          props.isAuth
          ? <div className={s.userInfo}>
          <div className={s.item}>id: {props.id}</div>
          <NavLink to={'/profile/' + props.id} className={s.profileLink}>
          <div>name: {props.login}</div>
          <img src={userPhoto} alt="" className={s.userPhoto}/>
          </NavLink>
            <button onClick={props.logout} className={s.btn}>Log out</button>
          </div>
            : <div>
              <button className={s.btn + ' ' + s.mr10}><NavLink to={'/login'}>Log In</NavLink></button>
              <button className={s.btn}><NavLink to={'/register'}>Register</NavLink></button>
            </div>
        }
      </div>
    </header>
  )
}

export default Header;