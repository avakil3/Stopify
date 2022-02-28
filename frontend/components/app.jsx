import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashPageContainer from './splash_page/splash_page_container';

const App = () => (
  <div>
    {/* <Modal /> */}
    <header>
      {/* <GreetingContainer /> */}
    </header>
    <Switch>
    <Route path="/" component={SplashPageContainer}/>
    </Switch>
  </div>
);

export default App;