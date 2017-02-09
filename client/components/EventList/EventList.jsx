import React from 'react';
import EventListItem from '../EventListItem/EventListItem.jsx';

class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.events = props.events;

    this.state = {
      events: events
    }
  }

  render() {
    return (
      <div>
        <div className="container">
           <h2>{this.title}</h2>
            <div className="flexWrapper">
            <div className="flexItem">
              <EventListItem event={this.state.events[0]}/>
              <EventListItem event={this.state.events[1]}/>
              <EventListItem event={this.state.events[2]}/>
              <EventListItem event={this.state.events[3]}/>
              <EventListItem event={this.state.events[4]}/>
              <EventListItem event={this.state.events[5]}/>
              <EventListItem event={this.state.events[6]}/>
              <EventListItem event={this.state.events[7]}/>
              <EventListItem event={this.state.events[8]}/>

            </div>
            <div className="flexItem">
              <span>Map</span>
            </div>
          </div>   
        </div>
      </div>  
    );
  }
}

export default EventList;

var events = [
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  },
  {
    'img': 'src',
    'price': 20,
    'type': 'French',
    'reviews': {
      rating: 5,
      count: 283
    }
  }
]
;