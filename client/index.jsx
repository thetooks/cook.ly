import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory} from 'react-router';
import App from './components/app.jsx';
import Host from './components/host.jsx';
import Carousel from './components/carousel.jsx';
import Signup from './components/signup.jsx';
import Login from './components/login.jsx';
// ReactDOM.render(
//   <App/>,
//   document.getElementById('app')
// );

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Carousel} />
      <Route path="host" component={Host} />
      <Route path="login" component={Login} />
      <Route path="signup" component={Signup} />
      
    </Route>
  </Router>
), document.getElementById('app'));
