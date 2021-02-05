import React from 'react';
import {connect} from 'react-redux';
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestUsers,
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress, getIsAuth,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
    this.props.setCurrentPage(pageNumber)
  }

  render() {
    if(!this.props.isAuth) return <Redirect to={'/login'} />

    return <>
      {this.props.isFetching
        ? <Preloader/>
        : <Users users={this.props.users}
                 follow={this.props.follow}
                 unfollow={this.props.unfollow}
                 totalUsersCount={this.props.totalUsersCount}
                 setPages={this.props.setPages}
                 pageSize={this.props.pageSize}
                 currentPage={this.props.currentPage}
                 onPageChanged={this.onPageChanged}
                 followingInProgress={this.props.followingInProgress}
                 toggleFollowingProgress={this.props.toggleFollowingProgress}
                 isAuth={this.props.isAuth}
        />
      }
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getIsAuth(state)
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
    })
)(UsersContainer)
