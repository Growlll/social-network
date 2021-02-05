import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Container) => {
  class RedirectComponent extends React.Component {
    render() {
      if(!this.props.isAuth) return <Redirect to={'/login'} />
      return <Container {...this.props}/>
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

  return ConnectedAuthRedirectComponent;
}