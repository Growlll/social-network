import React from 'react'
import s from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
  return <div className={s.users}>
    <Paginator totalItemsCount={totalUsersCount}
               pageSize={pageSize}
               onPageChanged={onPageChanged}
               currentPage={currentPage}
    />
    {
      users.map(u => <User user={u}
                           key={u.id}
                           followingInProgress={props.followingInProgress}
                           follow={props.follow}
                           unfollow={props.unfollow}
        />
      )
    }


  </div>
}

export default Users;