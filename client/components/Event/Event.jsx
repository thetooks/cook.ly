import React from 'react';
import $ from 'jquery';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }

    var context = this;
    $.ajax({
      url: '/getEvents',
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

    this.handleSeatBooking = this.handleSeatBooking.bind(this);
  }

  handleSeatBooking(index) {
    $.ajax({
      url: 'userBooksEvent',
      method: 'POST',
      success: function() {

      },
      error: function() {
        
      }
    })
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
              <button onClick={() => {handleSeatBooking(index)}}>Book a Seat</button>
            </div>
          );
        })}
      </div>
    );
  }
};

module.exports = Event;