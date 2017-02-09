import React from 'react';
import styles from './Recommendations.css';
import EventListItem from '../../EventListItem/EventListItem.jsx';

class Recommendations extends React.Component {
  constructor(props) {
    super(props);

    this.title = props.title;

    this.state = {
      recommendations: props.recommendations
    }
      
  }

  render() {
    return (
      <div className="container">
         <h2>{this.title}</h2>
          <div className="flexWrapper">
            <EventListItem event={this.state.recommendations[0]}/>
            <EventListItem event={this.state.recommendations[1]}/>
            <EventListItem event={this.state.recommendations[2]}/>
          </div>
      </div>
    )
  }
}

export default Recommendations;