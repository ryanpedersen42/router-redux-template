import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';

import MainPage from '../pages/main-page/main-page';
import AboutPage from '../pages/about-page/about-page';
import AuthPage from '../pages/auth-page/auth-page';

import Header from '../components/header/header';

import { setCurrentUser } from '../redux/user/user.actions.js';
import { selectCurrentUser } from '../redux/user/user.selectors';

import './App.css';

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/signin' component={AuthPage} />
      </Switch>
  </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);