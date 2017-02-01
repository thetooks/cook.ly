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
        {this.state.events.map(function(event, index) {
          return (
            <div key={index}>
              <ul>
                <li>Date: {event.TimeStamp.slice(0,10)}</li>
                <li>Host: {event.Host}</li>
                <li>Address: {event.Address}</li>
                <li>Theme: {event.Cuisine}</li>
              </ul>
              <button>Cancel Booking</button>
            </div>
          );
        })}
      </div>
    );
  }
}

module.exports = UserBooking