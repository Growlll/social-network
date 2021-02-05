import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import ProfileStatus from "../ProfileStatus";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const socialLink = props.profile.contacts
  let socialArr = []
  for (let key in socialLink) {
    if (socialLink[key]) {
      socialArr.push(socialLink[key])
    }
  }

  return (
    <div>
      {/*<div>*/}
      {/*  <img className={s.img} src="https://fartuk.ru/upload/resize_cache/iblock/e97/1920_311_1d2c0be91f8b91a0d3c91a9448f348e3c/skinali_vodoemy_plyazh_54013.jpg" alt="" />*/}
      {/*</div>*/}
      <div className={s.description}>
        <div>
          <img src={props.profile.photos.large} alt=""/>
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <div>
          <div>{props.profile.fullName}</div>
          <div>{props.profile.aboutMe}</div>
          <div>
            {
              socialArr.map(link => {
                return <NavLink to={link} className={s.socialLink}>{link}</NavLink>
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo