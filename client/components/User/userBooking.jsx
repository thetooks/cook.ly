import React from 'react';
import $ from 'jquery';
class UserBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [] // [events, locations, hosts]
    }

    // ajax request to the server to pull
    var context = this;
    $.ajax({
      url: '/api/getUserEvents',
      method: 'GET',
      success: function(data) {
        context.setState({
          events: data
        });
      },
      error: function(err, data) {
        console.log(err, data);
        throw err;
      }
    });
  }

  render() {
    var context = this;
    return (
      <div>
        {this.state.events.map(function(event, index) {
          return (
            <div key={index}>
              <ul>
                <li>Host: {event.hostName}</li>
                <li>Address: {event.address}</li>
                <li>Theme: {event.theme}</li>
                <li>Price: {event.price}</li>
                <li>Date: {event.date.slice(0,10) + ' ' + event.date.slice(11, 19)}</li>
              </ul>
              <button>Cancel Booking</button>
            </div>
          );
        })}
      </div>
    );
  }
}

module.exports = UserBooking;