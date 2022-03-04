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
import AlbumShowPageContainer from './albums/album_show_page_container';

const App = () => (
  <div>
    {/* <Modal /> */}
    <header>
      {/* <GreetingContainer /> */}
    </header>
    <Switch>
      <ProtectedRoute exact path="/home" component={HomePageContainer} />
      <Route path="/albums/:albumId" component={AlbumShowPageContainer}/>
      <Route exact path="/" component={SplashPageContainer}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;