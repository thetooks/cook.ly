import React from 'react';

class ViewEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    fetch('/api/allUpcommingEvents', {method: 'GET'})
    .then((res) => res.json())
    .then((data) => this.setState({events: data}))
    .catch((err) => console.log('Request Failed: ', err));
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