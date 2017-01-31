import React from 'react';
import Navbar from './nav.jsx';
import Carousel from './carousel.jsx';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.getAllEvents = this.getAllEvents.bind(this);
  }

  getAllEvents() {
    $.ajax({
      url: '/getallevents',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        console.log(data);
      },
      error: function(err, data) {
        console.log(err, data);
        throw err;
      }
    })
  }

  render() {
    return (
      <div >
        <Navbar />
        {this.props.children}
        <button onClick={this.getAllEvents}>Get all events</button>
      </div>
    );
  }
}

module.exports = App;