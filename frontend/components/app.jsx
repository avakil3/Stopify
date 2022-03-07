import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPageContainer from './splash_page/splash_page_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import HomePageContainer from './home_page/home_page_container';
// import Sidebar from './home_page/sidebar';


const App = () => (
  <div>
      {/* <ProtectedRoute path="/" component={Sidebar} /> */}
    <Switch>
      <ProtectedRoute path="/home" component={HomePageContainer} />
      <Route exact path="/" component={SplashPageContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;