import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }

    var context = this;

    // get request to server on render of this component
    fetch(
      './api/getEvents', 
      {  
        method: 'GET',
        headers: 
          {  
            "Content-type": "application/json; charset=UTF-8"
          }
      }
    )
    .then(function (response) {  
      response.json().then(function(data) {
        // console.log('Request succeeded with JSON response', data);
        context.setState({
          events: data
        }); 
      });
    })  
    .catch(function (error) {  
      console.log('Request failed', error);
      throw error; 
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
                <li>Host: {event.hostName}</li>
                <li>Address: {event.address}</li>
                <li>Theme: {event.theme}</li>
                <li>Price: {event.price}</li>
                <li>Date: {event.date.slice(0,10) + ' at ' + event.date.slice(11, 19)}</li>
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