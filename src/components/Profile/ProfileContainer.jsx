import React from 'react';
import Profile from './Profile';
import {connect} from "react-redux";
import {
  getStatus,
  getUserProfile,
  updateStatus
} from "../../redux/profile-reducer";
import {withRouter, Redirect} from 'react-router-dom';
import {compose} from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if(!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }

  render() {
    // if (!this.props.isAuth) return <Redirect to={'/login'}/>
    return (
      <Profile {...this.props}
               profile={this.props.profile}
               status={this.props.status}
               updateStatus={this.props.updateStatus}/>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, {getStatus, updateStatus, getUserProfile}),
  withRouter
)(ProfileContainer);