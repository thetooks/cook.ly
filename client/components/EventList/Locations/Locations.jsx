import React from 'react';
import Map from './Map/Map.jsx';
import { markers } from '../../../../db/dummyData.js';
import styles from './Locations.css';

class Locations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: markers      
    }
  }

  
  render() {
    return (
      <div className={styles.mapContainer}>
       <Map />
      </div>
    );
  }
}

export default Locations;



