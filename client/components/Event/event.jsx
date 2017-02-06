import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 1,
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

    this.handleBookEvent = this.handleBookEvent.bind(this);
  }

  handleBookEvent(eventId) {
    var context = this;
    var data = JSON.stringify({eventId: eventId});
    // console.log('HANDLE BOOK EVENT FUNCTION: ', data);
    fetch(
      './api/userBookEvent', 
      {
        method: 'POST',
        headers: 
          {  
            "Content-type": "application/json; charset=UTF-8"
          },
        body: data
      }
    )
    .catch(err => console.log(err));
  }

  render() {
    var context = this;
    return (
      <div>
        {this.state.events.map(function(event, index) {
          return (
            <div key={index}>
              <ul>
                <li>{event.eventTitle}</li>
                <li>Host: {event.hostName}</li>
                <li>Address: {event.address}</li>
                <li>Theme: {event.theme}</li>
                <li>Price: {event.price}</li>
                <li>Date: {event.date.slice(0,10) + ' at ' + event.date.slice(11, 19)}</li>
              </ul>
              <button onClick={() => {context.handleBookEvent(event.eventId)}}>Book a Seat</button>
            </div>
          );
        })}
      </div>
    );
  }
};

module.exports = Event;