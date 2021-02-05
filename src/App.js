import React, {Suspense} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {withRouter} from 'react-router';
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route
            path='/profile/:userId?'
            render={() => <ProfileContainer/>}/>
          <Route
            path='/dialogs'
            render={withSuspense(DialogsContainer)}/>
          <Route
            path='/users'
            render={withSuspense(UsersContainer)} />
          <Route path='/news' component={News}/>
          <Route
            path='/login'
            render={() => <LoginContainer/>}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
initialized: state.app.initialized,
})

const AppContainer = compose(
withRouter,
connect(mapStateToProps, {initializeApp}))(App);

const MainApp = () => {
return <BrowserRouter>
<Provider store= {
  store
}

>
<AppContainer/>
</Provider>
</BrowserRouter>
}

export default MainApp