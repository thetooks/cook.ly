import React, { PropTypes as T } from 'react';
import NavBar from '../NavBar/NavBar.jsx';
import Carousel from './carousel.jsx';
import $ from 'jquery';


class App extends React.Component {
  

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      });
    }

        
    return (
      <div >
        <NavBar />
        {children}
      </div>
    );
  }
}

module.exports = App;



