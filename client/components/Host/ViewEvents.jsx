import React from 'react';
import $ from 'jquery';

class ViewEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.getAllEvents();
  }

  getAllEvents() {
    var context = this;
    $.ajax({
      url: '/api/allUpcommingEvents',
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
    // console.log(this.state.events);
    var list = this.state.events.map((item) =>
      <div key={item.id}>
        <h5>Event Title</h5>
        <ul>
          <li>{item.cuisine}</li>
        </ul>
      </div>
    );
    return (
      <div>
        <h4>Upcoming Events</h4>
        <div>{list}</div>
      </div>
    );
  }
}

module.exports = ViewEvents;