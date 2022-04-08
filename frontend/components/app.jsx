import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SplashPage from './splash_page/splash_page';
import HomePageContainer from './home_page/home_page_container';
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

history.listen((location, action) => {
    window.scrollTo(0, 0)
})


const App = () => {
 return ( 
 <div>
    <Switch>
      <ProtectedRoute path="/home" component={HomePageContainer} history={history} />
      <Route exact path="/" component={SplashPage}/>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
  )
};

export default App;