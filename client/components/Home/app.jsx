import React, { PropTypes as T } from 'react';
import Navbar from './nav.jsx';
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
        <Navbar />
        
        {children}
      </div>
    );
  }
}

module.exports = App;



