import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/imgs/user.jpg'
import {NavLink} from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {
  const u = user

  return <div className={s.user}>
    <div className={s.userFollow}>

      <div>
        <NavLink to={'/profile/' + u.id}>
          <img src={u.photos.small || userPhoto} alt="" className={s.userPhoto}/>
        </NavLink>
      </div>
      <div>
        {u.followed
          ? <button disabled={followingInProgress.some(id => id === u.id)}
                    onClick={() => unfollow(u.id)}>unfollow</button>

          : <button disabled={followingInProgress.some(id => id === u.id)}
                    onClick={() => follow(u.id)}>follow</button>
        }
      </div>
    </div>

    <div>
      <div>{u.name}</div>
      <div>{'u.location.country'}</div>
      <div>{'u.location.city'}</div>
      <div>{u.status}</div>
    </div>
  </div>
}

export default User;