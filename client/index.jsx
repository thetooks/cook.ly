import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import AuthService from './utils/AuthService';

import App from './components/Home/app.jsx';
import Host from './components/Host/host.jsx';
import Carousel from './components/Home/carousel.jsx';
import Login from './components/Auth/login.jsx';
import User from './components/User/user.jsx';
// make sure to enter your Auth0 credentials below  
//const auth = new AuthService(FILL ME UP);
// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  } 
};


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} auth={auth}>
      <IndexRoute component={Carousel} />
      <Route path="host" component={Host} onEnter={requireAuth}/>
      <Route path="user" component={User} onEnter={requireAuth}/>
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'));
