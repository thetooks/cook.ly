import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, IndexRedirect, hashHistory} from 'react-router';
import AuthService from './utils/AuthService';

import App from './components/Home/app.jsx';
import Host from './components/Host/host.jsx';
import Carousel from './components/Home/carousel.jsx';
import Signup from './components/Auth/signup.jsx';
import Login from './components/Auth/login.jsx';
import User from './components/User/user.jsx';

const auth = new AuthService('x0nqjFS9JOa70TEIbFdcy6YJ9foK2Ln3', 'awattny.auth0.com');
// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  } 
};


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} auth={auth}>
      <IndexRoute component={Carousel} />

      <Route path="host" component={Host} onEnter={requireAuth}/>
      <Route path="user" component={User} onEnter={requireAuth}/>
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('app'));
