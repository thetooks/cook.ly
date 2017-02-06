import React from 'react';

class UserBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [] // [events, locations, hosts]
    }

    // ajax request to the server to pull
    var context = this;

    fetch(
      './api/getUserEvents', 
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
              <button>Cancel Booking</button>
            </div>
          );
        })}
      </div>
    );
  }
}

module.exports = UserBooking;