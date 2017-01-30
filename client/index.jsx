import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import App from './components/App.jsx';
import Host from './components/HostPage.jsx';

// ReactDOM.render(
//   <App/>,
//   document.getElementById('app')
// );

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.getElementById('app'));
