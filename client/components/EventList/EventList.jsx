import React from 'react';
import EventListItem from '../EventListItem/EventListItem.jsx';
import { events } from '../../../db/dummyData.js';
import Locations from './Locations/Locations.jsx';
import Filter from './Filter/Filter.jsx';
import Info from './Info/Info.jsx';
import styles from './EventList.css';

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
        <div className="fullContainer">
          

          <Filter />

          <div className="flexWrapper">
            <div className={styles.listContainer}>
              <Info />
              <div className={styles.listItemContainer}>
                

                <div className="flexWrapper">
                  {
                    this.state.events.map((event) => {
                      return (
                        <EventListItem key={event.id} event={event}/>
                      );
                    })
                  }
                </div>  
              </div>  
            </div>
            <div className={styles.locationContainer}>
              <Locations /> 
            </div>
          </div>   
        </div>
      </div>  
    );
  }
}

export default EventList;
