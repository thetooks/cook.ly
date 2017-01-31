import React from 'react';
import $ from 'jquery';
class UserBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }

    // ajax request to the server to pull
    var context = this;
    $.ajax({
      url: '/getUserEvents',
      method: 'GET',
      success: function(data) {
        // console.log(data);
        var eventsArray = JSON.parse(data);
        console.log(eventsArray);
        context.setState({
          events: JSON.parse(data)
        });
      },
      error: function(err, data) {
        console.log(err, data);
        throw err;
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.events.map(function(event) {
          return (
            <ul>
              <li>Date: </li>
              <li>Host: </li>
              <li>Address: {event.Address}</li>
              <li>Theme: {event.Cuisine}</li>
            </ul>
          )
        })}
      </div>
    )
  }
}

module.exports = UserBooking